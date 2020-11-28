package dev.robocode.tankroyale.gui.bootstrap

import kotlinx.serialization.Serializable

@Serializable
data class BotEntry(
    val filename: String,
    val info: Info
) {}

@Serializable
data class Info(
    val name: String,
    val version: String,
    val author: String,
    val description: String? = null,
    val url: String? = null,
    val countryCode: String? = null,
    val gameTypes: Set<String>,
    val programmingLang: String? = null,
    val platform: String? = null
) {
    val displayText: String
        get() {
            return if (author.isBlank()) "$name $version" else "$author: $name $version"
        }
}