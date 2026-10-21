const { getTime, drive } = global.utils;
if (!global.temp.welcomeEvent)
	global.temp.welcomeEvent = {};

module.exports = {
	config: {
		name: "welcome",
		version: "1.9",
		author: "myoun",
		category: "events"
	},

	langs: {
		vi: {
			session1: "sáng",
			session2: "trưa",
			session3: "chiều",
			session4: "tối",
			welcomeMessage: "🌟 ━━━━━━━━━━━━━━━ 🌟\n🤖 **𝐁𝐎𝐓 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐈𝐎𝐍 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋**\n🌟 ━━━━━━━━━━━━━━━ 🌟\n\n✨ 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐚𝐝𝐝𝐢𝐧𝐠 𝐦𝐞 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩! ❤️\n\n📌 **𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞:** {boxName}\n👑 **𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫:** মা ই য়ু ন\n🌐 **𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲:** 𝐂𝐮𝐭𝐞 𝐁𝐚𝐫𝐫𝐲 🦋\n👤 **𝐀𝐝𝐝𝐞𝐝 𝐁𝐲:** {adderName}\n⚙️ **𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱:** %1\n\n🚀 𝐓𝐲𝐩𝐞 𝐭𝐨 𝐬𝐞𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬: %1𝐡𝐞𝐥𝐩\n🌟 ━━━━━━━━━━━━━━━ 🌟",
			multiple1: "bạn",
			multiple2: "các bạn",
			defaultWelcomeMessage: "🌟 ━━━━━━━━━━━━━━━ 🌟\n🤖 **𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏**\n🌟 ━━━━━━━━━━━━━━━ 🌟\n\n✨ **𝐖𝐞𝐥𝐜𝐨𝐦𝐞, {userName}!** ❤️\n\n📌 **𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞:** {boxName}\n👑 **𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫:** মা ই য়ু ন\n👤 **𝐀𝐝𝐝𝐞𝐝 𝐁𝐲:** {adderName}\n🌐 **𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲:** 𝐂𝐮𝐭𝐞 𝐁𝐚𝐫𝐫𝐲 🦋\n\n🚀 𝐄𝐧𝐣𝐨𝐲 𝐲𝐨𝐮𝐫 𝐭𝐢𝐦𝐞 𝐡𝐞𝐫𝐞!\n🌟 ━━━━━━━━━━━━━━━ 🌟"
		},
		en: {
			session1: "morning",
			session2: "noon",
			session3: "afternoon",
			session4: "evening",
			welcomeMessage: "🌟 ━━━━━━━━━━━━━━━ 🌟\n🤖 **𝐁𝐎𝐓 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐈𝐎𝐍 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋**\n🌟 ━━━━━━━━━━━━━━━ 🌟\n\n✨ 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐚𝐝𝐝𝐢𝐧𝐠 𝐦𝐞 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩! ❤️\n\n📌 **𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞:** {boxName}\n👑 **𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫:** মা ই য়ু ন\n🌐 **𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲:** 𝐂𝐮𝐭𝐞 𝐁𝐚𝐫𝐫𝐲 🦋\n👤 **𝐀𝐝𝐝𝐞𝐝 𝐁𝐲:** {adderName}\n⚙️ **𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱:** %1\n\n🚀 𝐓𝐲𝐩𝐞 𝐭𝐨 𝐬𝐞𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬: %1𝐡𝐞𝐥𝐩\n🌟 ━━━━━━━━━━━━━━━ 🌟",
			multiple1: "you",
			multiple2: "you guys",
			defaultWelcomeMessage: "🌟 ━━━━━━━━━━━━━━━ 🌟\n🤖 **𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏**\n🌟 ━━━━━━━━━━━━━━━ 🌟\n\n✨ **𝐖𝐞𝐥𝐜𝐨𝐦𝐞, {userName}!** ❤️\n\n📌 **𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞:** {boxName}\n👑 **𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫:** মা ই য়ু ন\n👤 **𝐀𝐝𝐝𝐞𝐝 𝐁𝐲:** {adderName}\n🌐 **𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲:** 𝐂𝐮𝐭𝐞 𝐁𝐚𝐫𝐫𝐲 🦋\n\n🚀 𝐄𝐧𝐣𝐨𝐲 𝐲𝐨𝐮𝐫 𝐭𝐢𝐦𝐞 𝐡𝐞𝐫𝐞!\n🌟 ━━━━━━━━━━━━━━━ 🌟"
		}
	},

	onStart: async ({ threadsData, message, event, api, getLang, usersData }) => {
		if (event.logMessageType == "log:subscribe")
			return async function () {
				const hours = getTime("HH");
				const { threadID } = event;
				const { nickNameBot } = global.GoatBot.config;
				const prefix = global.utils.getPrefix(threadID);
				const dataAddedParticipants = event.logMessageData.addedParticipants;
				
				// if new member is bot
				if (dataAddedParticipants.some((item) => item.userFbId == api.getCurrentUserID())) {
					if (nickNameBot)
						api.changeNickname(nickNameBot, threadID, api.getCurrentUserID());
					
					const adderID = event.author;
					let adderName = "Admin";
					try {
						const userInfo = await usersData.get(adderID);
						adderName = userInfo?.name || "User";
					} catch (e) {
						adderName = "User";
					}

					const threadInfo = await api.getThreadInfo(threadID);
					const boxName = threadInfo.threadName || "This Group";

					let msg = getLang("welcomeMessage", prefix)
						.replace(/\{boxName\}/g, boxName)
						.replace(/\{adderName\}/g, adderName);

					return message.send(msg);
				}

				// if new member:
				if (!global.temp.welcomeEvent[threadID])
					global.temp.welcomeEvent[threadID] = {
						joinTimeout: null,
						dataAddedParticipants: []
					};

				global.temp.welcomeEvent[threadID].dataAddedParticipants.push(...dataAddedParticipants);
				clearTimeout(global.temp.welcomeEvent[threadID].joinTimeout);

				global.temp.welcomeEvent[threadID].joinTimeout = setTimeout(async function () {
					const threadData = await threadsData.get(threadID);
					if (threadData.settings.sendWelcomeMessage == false)
						return;
					const dataAddedParticipants = global.temp.welcomeEvent[threadID].dataAddedParticipants;
					const dataBanned = threadData.data.banned_ban || [];
					const threadName = threadData.threadName;
					const userName = [],
						mentions = [];
					let multiple = false;

					if (dataAddedParticipants.length > 1)
						multiple = true;

					const adderID = event.author;
					let adderName = "Admin";
					try {
						adderName = await usersData.getName(adderID) || "User";
					} catch (e) {
						adderName = "User";
					}

					for (const user of dataAddedParticipants) {
						if (dataBanned.some((item) => item.id == user.userFbId))
							continue;
						userName.push(user.fullName);
						mentions.push({
							tag: user.fullName,
							id: user.userFbId
						});
					}
					if (userName.length == 0) return;
					let { welcomeMessage = getLang("defaultWelcomeMessage") } =
						threadData.data;
					const form = {
						mentions: welcomeMessage.match(/\{userNameTag\}/g) ? mentions : null
					};
					welcomeMessage = welcomeMessage
						.replace(/\{userName\}|\{userNameTag\}/g, userName.join(", "))
						.replace(/\{boxName\}|\{threadName\}/g, threadName)
						.replace(/\{adderName\}/g, adderName)
						.replace(
							/\{multiple\}/g,
							multiple ? getLang("multiple2") : getLang("multiple1")
						)
						.replace(
							/\{session\}/g,
							hours <= 10
								? getLang("session1")
								: hours <= 12
									? getLang("session2")
									: hours <= 18
										? getLang("session3")
										: getLang("session4")
						);

					form.body = welcomeMessage;

					if (threadData.data.welcomeAttachment) {
						const files = threadData.data.welcomeAttachment;
						const attachments = files.reduce((acc, file) => {
							acc.push(drive.getFile(file, "stream"));
							return acc;
						}, []);
						form.attachment = (await Promise.allSettled(attachments))
							.filter(({ status }) => status == "fulfilled")
							.map(({ value }) => value);
					}
					message.send(form);
					delete global.temp.welcomeEvent[threadID];
				}, 1500);
			};
	}
};
