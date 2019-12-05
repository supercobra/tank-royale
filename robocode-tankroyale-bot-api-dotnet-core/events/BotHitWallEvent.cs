namespace Robocode.TankRoyale
{
  /// <summary>
  /// Event occurring when the bot has hit a wall.
  /// </summary>
  public class BotHitWallEvent : Event
  {
    /// <summary>ID of the victim bot that hit the wall.<summary>
    int VictimId { get; }

    /// <summary>
    /// Constructor.
    /// </summary>
    /// <param name="turnNumber">Turn number.</param>
    /// <param name="victimId">ID of the victim bot that hit the wall.</param>
    public BotHitWallEvent(int turnNumber, int victimId) : base(turnNumber) => VictimId = victimId;
  }
}