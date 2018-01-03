package net.robocode2.model.mappers;

import java.util.Collections;

import net.robocode2.json_schema.comm.BotHandshake;
import net.robocode2.json_schema.comm.BotInfo;

public class BotHandshakeToBotInfoMapper {

	public static BotInfo map(BotHandshake botHandshake, String hostName, Integer port) {
		BotInfo botInfo = new BotInfo();

		botInfo.setAuthor(botHandshake.getAuthor());
		botInfo.setCountryCode(botHandshake.getCountryCode());
		botInfo.setGameTypes(Collections.unmodifiableList(botHandshake.getGameTypes()));
		botInfo.setName(botHandshake.getName());
		botInfo.setProgrammingLanguage(botHandshake.getProgrammingLanguage());
		botInfo.setVersion(botHandshake.getVersion());
		botInfo.setHost(hostName);
		botInfo.setPort(port);

		return botInfo;
	}
}
