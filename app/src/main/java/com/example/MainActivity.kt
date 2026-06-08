package com.example

import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Color
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.FrameLayout
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat

class MainActivity : ComponentActivity() {
    private lateinit var webView: WebView
    private val PHONE_CALL_REQUEST_CODE = 42
    private var pendingCallUri: String? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Force status bar color to exactly correspond to LifeLine brand theme color
        window.statusBarColor = Color.parseColor("#e11d48")
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            // Light status bar text on dark/vibrant background
            window.decorView.systemUiVisibility = 0
        }

        // Programmatically instantiate WebView inside a container FrameLayout
        webView = WebView(this).apply {
            layoutParams = FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.MATCH_PARENT,
                FrameLayout.LayoutParams.MATCH_PARENT
            )
        }

        setContentView(webView)

        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            databaseEnabled = true
            allowFileAccess = true
            allowContentAccess = true
            loadsImagesAutomatically = true
            mediaPlaybackRequiresUserGesture = false
            mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
            cacheMode = WebSettings.LOAD_DEFAULT
            setSupportZoom(false)
            builtInZoomControls = false
            displayZoomControls = false
        }

        webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
                if (url == null) return false

                // Handle direct phone calls
                if (url.startsWith("tel:")) {
                    handlePhoneCall(url)
                    return true
                }

                // Handle external navigation (maps, whatsapp, other websites)
                if (url.startsWith("https://wa.me") || 
                    url.contains("maps") || 
                    url.contains("dhonnobadprinters.com")) {
                    try {
                        val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
                        startActivity(intent)
                    } catch (e: Exception) {
                        e.printStackTrace()
                    }
                    return true
                }

                return false // load in WebView
            }
        }

        webView.webChromeClient = WebChromeClient()

        // Handle onBackPressed using the modern OnBackPressedCallback API
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (webView.canGoBack()) {
                    webView.goBack()
                } else {
                    isEnabled = false
                    onBackPressedDispatcher.onBackPressed()
                }
            }
        })

        webView.loadUrl("file:///android_asset/www/index.html")
    }

    private fun handlePhoneCall(url: String) {
        val phoneNumber = url.substringAfter("tel:")
        // Check for permission for direct calls
        if (ContextCompat.checkSelfPermission(this, android.Manifest.permission.CALL_PHONE)
            == PackageManager.PERMISSION_GRANTED) {
            makeDirectCall(phoneNumber)
        } else {
            pendingCallUri = phoneNumber
            ActivityCompat.requestPermissions(
                this,
                arrayOf(android.Manifest.permission.CALL_PHONE),
                PHONE_CALL_REQUEST_CODE
            )
        }
    }

    private fun makeDirectCall(number: String) {
        try {
            val intent = Intent(Intent.ACTION_CALL, Uri.parse("tel:$number"))
            startActivity(intent)
        } catch (e: SecurityException) {
            // Fallback to Dial intent if ACTION_CALL fails or permissions are missing
            val intent = Intent(Intent.ACTION_DIAL, Uri.parse("tel:$number"))
            startActivity(intent)
        }
    }

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == PHONE_CALL_REQUEST_CODE) {
            val pending = pendingCallUri
            if (pending != null) {
                if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    makeDirectCall(pending)
                } else {
                    // Fallback to Dial intent if user denied permission
                    val intent = Intent(Intent.ACTION_DIAL, Uri.parse("tel:$pending"))
                    startActivity(intent)
                }
                pendingCallUri = null
            }
        }
    }

    override fun onPause() {
        super.onPause()
        webView.onPause()
    }

    override fun onResume() {
        super.onResume()
        webView.onResume()
    }

    override fun onDestroy() {
        webView.destroy()
        super.onDestroy()
    }
}
