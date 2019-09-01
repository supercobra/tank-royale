package dev.robocode.tankroyale.ui.desktop.model

import kotlinx.serialization.Serializable

@Serializable
data class BotInfo(
    val name: String,
    val version: String,
    val author: String,
    val description: String? = null,
    val countryCode: String? = null,
    val programmingLang: String? = null,
    val gameTypes: Set<String>,
    val host: String,
    val port: Int
) {
    val botAddress: BotAddress
        get() = BotAddress(host, port)

    val displayText: String
        get() {
            return if (author.isBlank()) "$name $version" else "$author: $name $version"
        }
}