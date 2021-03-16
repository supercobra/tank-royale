//----------------------
// <auto-generated>
//     Generated using the NJsonSchema v10.1.2.0 (Newtonsoft.Json v9.0.0.0) (http://NJsonSchema.org)
// </auto-generated>
//----------------------

namespace Robocode.TankRoyale.Schema
{
    #pragma warning disable // Disable all warnings

    /// <summary>Message exchanged between server and client</summary>
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.2.0 (Newtonsoft.Json v9.0.0.0)")]
    public class Message 
    {
        [Newtonsoft.Json.JsonProperty("$type", Required = Newtonsoft.Json.Required.Always)]
        public string Type { get; set; }
    
    
    }
    
    [System.CodeDom.Compiler.GeneratedCode("NJsonSchema", "10.1.2.0 (Newtonsoft.Json v9.0.0.0)")]
    public enum MessageType
    {
        [System.Runtime.Serialization.EnumMember(Value = @"BotHandshake")]
        BotHandshake = 0,
    
        [System.Runtime.Serialization.EnumMember(Value = @"BotInfo")]
        BotInfo = 1,
    
        [System.Runtime.Serialization.EnumMember(Value = @"BotIntent")]
        BotIntent = 2,
    
        [System.Runtime.Serialization.EnumMember(Value = @"BotListUpdate")]
        BotListUpdate = 3,
    
        [System.Runtime.Serialization.EnumMember(Value = @"BotReady")]
        BotReady = 4,
    
        [System.Runtime.Serialization.EnumMember(Value = @"ControllerHandshake")]
        ControllerHandshake = 5,
    
        [System.Runtime.Serialization.EnumMember(Value = @"ObserverHandshake")]
        ObserverHandshake = 6,
    
        [System.Runtime.Serialization.EnumMember(Value = @"ServerHandshake")]
        ServerHandshake = 7,
    
        [System.Runtime.Serialization.EnumMember(Value = @"GameAbortedEvent")]
        GameAbortedEvent = 8,
    
        [System.Runtime.Serialization.EnumMember(Value = @"GameEndedEventForBot")]
        GameEndedEventForBot = 9,
    
        [System.Runtime.Serialization.EnumMember(Value = @"GameEndedEventForObserver")]
        GameEndedEventForObserver = 10,
    
        [System.Runtime.Serialization.EnumMember(Value = @"GamePausedEventForObserver")]
        GamePausedEventForObserver = 11,
    
        [System.Runtime.Serialization.EnumMember(Value = @"GameResumedEventForObserver")]
        GameResumedEventForObserver = 12,
    
        [System.Runtime.Serialization.EnumMember(Value = @"GameStartedEventForBot")]
        GameStartedEventForBot = 13,
    
        [System.Runtime.Serialization.EnumMember(Value = @"GameStartedEventForObserver")]
        GameStartedEventForObserver = 14,
    
        [System.Runtime.Serialization.EnumMember(Value = @"TpsChangedEvent")]
        TpsChangedEvent = 15,
    
        [System.Runtime.Serialization.EnumMember(Value = @"BotDeathEvent")]
        BotDeathEvent = 16,
    
        [System.Runtime.Serialization.EnumMember(Value = @"BotHitBotEvent")]
        BotHitBotEvent = 17,
    
        [System.Runtime.Serialization.EnumMember(Value = @"BotHitWallEvent")]
        BotHitWallEvent = 18,
    
        [System.Runtime.Serialization.EnumMember(Value = @"BulletFiredEvent")]
        BulletFiredEvent = 19,
    
        [System.Runtime.Serialization.EnumMember(Value = @"BulletHitBotEvent")]
        BulletHitBotEvent = 20,
    
        [System.Runtime.Serialization.EnumMember(Value = @"BulletHitBulletEvent")]
        BulletHitBulletEvent = 21,
    
        [System.Runtime.Serialization.EnumMember(Value = @"BulletHitWallEvent")]
        BulletHitWallEvent = 22,
    
        [System.Runtime.Serialization.EnumMember(Value = @"HitByBulletEvent")]
        HitByBulletEvent = 23,
    
        [System.Runtime.Serialization.EnumMember(Value = @"ScannedBotEvent")]
        ScannedBotEvent = 24,
    
        [System.Runtime.Serialization.EnumMember(Value = @"SkippedTurnEvent")]
        SkippedTurnEvent = 25,
    
        [System.Runtime.Serialization.EnumMember(Value = @"TickEventForBot")]
        TickEventForBot = 26,
    
        [System.Runtime.Serialization.EnumMember(Value = @"TickEventForObserver")]
        TickEventForObserver = 27,
    
        [System.Runtime.Serialization.EnumMember(Value = @"WonRoundEvent")]
        WonRoundEvent = 28,
    
        [System.Runtime.Serialization.EnumMember(Value = @"StartGame")]
        StartGame = 29,
    
        [System.Runtime.Serialization.EnumMember(Value = @"StopGame")]
        StopGame = 30,
    
        [System.Runtime.Serialization.EnumMember(Value = @"PauseGame")]
        PauseGame = 31,
    
        [System.Runtime.Serialization.EnumMember(Value = @"ResumeGame")]
        ResumeGame = 32,
    
        [System.Runtime.Serialization.EnumMember(Value = @"ChangeTps")]
        ChangeTps = 33,
    
    }
}