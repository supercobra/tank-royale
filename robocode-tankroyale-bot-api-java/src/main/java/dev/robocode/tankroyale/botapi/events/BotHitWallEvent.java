package dev.robocode.tankroyale.botapi.events;

/** Event occurring when your bot has hit a wall. */
@SuppressWarnings("unused")
public final class BotHitWallEvent extends Event {

  /**
   * Initializes a new instance of the BotHitWallEvent class.
   *
   * @param turnNumber is the turn number when the bot has hit the wall.
   */
  public BotHitWallEvent(int turnNumber) {
    super(turnNumber);
  }
}
