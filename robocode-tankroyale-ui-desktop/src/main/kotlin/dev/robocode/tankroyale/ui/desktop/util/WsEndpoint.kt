package dev.robocode.tankroyale.ui.desktop.util

import dev.robocode.tankroyale.ui.desktop.settings.ServerSettings
import java.net.URI
import java.io.IOException
import java.net.URL
import java.net.URLStreamHandler
import java.net.URL.setURLStreamHandlerFactory
import java.net.URLConnection


class WsEndpoint(private val partialEndpoint: String) {

    private val uri: URI

    init {
        // protocol + host + port, e.g. ws://localhost:55000

        var origin = partialEndpoint

        // Make sure the endpoint starts with "ws://"
        if (!origin.startsWith("ws://", ignoreCase = true)) {
            origin = "ws://$origin"
        }
        // Add a (default) port number, if it is not specified
        if (!origin.contains(Regex(".*:\\d{1,5}$"))) {
            origin = "$origin:${ServerSettings.DEFAULT_PORT}"
        }
        uri = URI(origin)
    }

    val origin: String get() = uri.toURL().toString()

    val protocol: Int get() = uri.port

    val host: String get() = uri.host

    val port: Int get() = uri.port

    val isLocalhost: Boolean get() = InetAddressUtil.isLocalAddress(host)
}