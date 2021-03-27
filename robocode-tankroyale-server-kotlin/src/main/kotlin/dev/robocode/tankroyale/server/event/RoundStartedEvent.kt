package dev.robocode.tankroyale.server.event

/** Event sent when a new round has started. */
data class RoundStartedEvent(
    /** Round number */
    val roundNumber: Int,

    /** Turn number */
    override var turnNumber: Int,
) : Event()