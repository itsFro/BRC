// ==UserScript==
// @name Better Remote Control Bondage Club
// @namespace BRC-Better-Remote-Control-Bondage Club
// @version 0.0.1
// @description Easy access to toy control
// @author itsFro
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @homepage https://itsfro.github.io/BRC/
// @run-at document-end
// @grant none
// ==/UserScript==

/*
Copyright (c) 2023 Fro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const BRC_Version = "0.0.1";
var tsyn = '109925';
var showhide = 1;
var remoteplay = 1;

var bcModSdk=function(){"use strict";const e="1.1.0";function o(e){alert("Mod ERROR:\n"+e);const o=new Error(e);throw console.error(o),o}const t=new TextEncoder;function n(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}function r(e){const o=new Set;return e.filter((e=>!o.has(e)&&o.add(e)))}const i=new Map,a=new Set;function d(e){a.has(e)||(a.add(e),console.warn(e))}function s(e){const o=[],t=new Map,n=new Set;for(const r of p.values()){const i=r.patching.get(e.name);if(i){o.push(...i.hooks);for(const[o,a]of i.patches.entries())t.has(o)&&t.get(o)!==a&&d(`ModSDK: Mod '${r.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${o}\nPatch1:\n${t.get(o)||""}\nPatch2:\n${a}`),t.set(o,a),n.add(r.name)}}o.sort(((e,o)=>o.priority-e.priority));const r=function(e,o){if(0===o.size)return e;let t=e.toString().replaceAll("\r\n","\n");for(const[n,r]of o.entries())t.includes(n)||d(`ModSDK: Patching ${e.name}: Patch ${n} not applied`),t=t.replaceAll(n,r);return(0,eval)(`(${t})`)}(e.original,t);let i=function(o){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookChainExit)||void 0===i?void 0:i.call(t,e.name,n),d=r.apply(this,o);return null==a||a(),d};for(let t=o.length-1;t>=0;t--){const n=o[t],r=i;i=function(o){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookEnter)||void 0===i?void 0:i.call(t,e.name,n.mod),d=n.hook.apply(this,[o,e=>{if(1!==arguments.length||!Array.isArray(o))throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof e}`);return r.call(this,e)}]);return null==a||a(),d}}return{hooks:o,patches:t,patchesSources:n,enter:i,final:r}}function c(e,o=!1){let r=i.get(e);if(r)o&&(r.precomputed=s(r));else{let o=window;const a=e.split(".");for(let t=0;t<a.length-1;t++)if(o=o[a[t]],!n(o))throw new Error(`ModSDK: Function ${e} to be patched not found; ${a.slice(0,t+1).join(".")} is not object`);const d=o[a[a.length-1]];if("function"!=typeof d)throw new Error(`ModSDK: Function ${e} to be patched not found`);const c=function(e){let o=-1;for(const n of t.encode(e)){let e=255&(o^n);for(let o=0;o<8;o++)e=1&e?-306674912^e>>>1:e>>>1;o=o>>>8^e}return((-1^o)>>>0).toString(16).padStart(8,"0").toUpperCase()}(d.toString().replaceAll("\r\n","\n")),l={name:e,original:d,originalHash:c};r=Object.assign(Object.assign({},l),{precomputed:s(l),router:()=>{},context:o,contextProperty:a[a.length-1]}),r.router=function(e){return function(...o){return e.precomputed.enter.apply(this,[o])}}(r),i.set(e,r),o[r.contextProperty]=r.router}return r}function l(){const e=new Set;for(const o of p.values())for(const t of o.patching.keys())e.add(t);for(const o of i.keys())e.add(o);for(const o of e)c(o,!0)}function f(){const e=new Map;for(const[o,t]of i)e.set(o,{name:o,original:t.original,originalHash:t.originalHash,sdkEntrypoint:t.router,currentEntrypoint:t.context[t.contextProperty],hookedByMods:r(t.precomputed.hooks.map((e=>e.mod))),patchedByMods:Array.from(t.precomputed.patchesSources)});return e}const p=new Map;function u(e){p.get(e.name)!==e&&o(`Failed to unload mod '${e.name}': Not registered`),p.delete(e.name),e.loaded=!1,l()}function g(e,t,r){"string"==typeof e&&"string"==typeof t&&(alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.\nIt will work for now, but please inform author to update.`),e={name:e,fullName:e,version:t},t={allowReplace:!0===r}),e&&"object"==typeof e||o("Failed to register mod: Expected info object, got "+typeof e),"string"==typeof e.name&&e.name||o("Failed to register mod: Expected name to be non-empty string, got "+typeof e.name);let i=`'${e.name}'`;"string"==typeof e.fullName&&e.fullName||o(`Failed to register mod ${i}: Expected fullName to be non-empty string, got ${typeof e.fullName}`),i=`'${e.fullName} (${e.name})'`,"string"!=typeof e.version&&o(`Failed to register mod ${i}: Expected version to be string, got ${typeof e.version}`),e.repository||(e.repository=void 0),void 0!==e.repository&&"string"!=typeof e.repository&&o(`Failed to register mod ${i}: Expected repository to be undefined or string, got ${typeof e.version}`),null==t&&(t={}),t&&"object"==typeof t||o(`Failed to register mod ${i}: Expected options to be undefined or object, got ${typeof t}`);const a=!0===t.allowReplace,d=p.get(e.name);d&&(d.allowReplace&&a||o(`Refusing to load mod ${i}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`),u(d));const s=e=>{"string"==typeof e&&e||o(`Mod ${i} failed to patch a function: Expected function name string, got ${typeof e}`);let t=g.patching.get(e);return t||(t={hooks:[],patches:new Map},g.patching.set(e,t)),t},f={unload:()=>u(g),hookFunction:(e,t,n)=>{g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`);const r=s(e);"number"!=typeof t&&o(`Mod ${i} failed to hook function '${e}': Expected priority number, got ${typeof t}`),"function"!=typeof n&&o(`Mod ${i} failed to hook function '${e}': Expected hook function, got ${typeof n}`);const a={mod:g.name,priority:t,hook:n};return r.hooks.push(a),l(),()=>{const e=r.hooks.indexOf(a);e>=0&&(r.hooks.splice(e,1),l())}},patchFunction:(e,t)=>{g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`);const r=s(e);n(t)||o(`Mod ${i} failed to patch function '${e}': Expected patches object, got ${typeof t}`);for(const[n,a]of Object.entries(t))"string"==typeof a?r.patches.set(n,a):null===a?r.patches.delete(n):o(`Mod ${i} failed to patch function '${e}': Invalid format of patch '${n}'`);l()},removePatches:e=>{g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`);s(e).patches.clear(),l()},callOriginal:(e,t,n)=>(g.loaded||o(`Mod ${i} attempted to call SDK function after being unloaded`),"string"==typeof e&&e||o(`Mod ${i} failed to call a function: Expected function name string, got ${typeof e}`),Array.isArray(t)||o(`Mod ${i} failed to call a function: Expected args array, got ${typeof t}`),function(e,o,t=window){return c(e).original.apply(t,o)}(e,t,n)),getOriginalHash:e=>("string"==typeof e&&e||o(`Mod ${i} failed to get hash: Expected function name string, got ${typeof e}`),c(e).originalHash)},g={name:e.name,fullName:e.fullName,version:e.version,repository:e.repository,allowReplace:a,api:f,loaded:!0,patching:new Map};return p.set(e.name,g),Object.freeze(f)}function h(){const e=[];for(const o of p.values())e.push({name:o.name,fullName:o.fullName,version:o.version,repository:o.repository});return e}let m;const y=function(){if(void 0===window.bcModSdk)return window.bcModSdk=function(){const o={version:e,apiVersion:1,registerMod:g,getModsInfo:h,getPatchingInfo:f,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return m=o,Object.freeze(o)}();if(n(window.bcModSdk)||o("Failed to init Mod SDK: Name already in use"),1!==window.bcModSdk.apiVersion&&o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==e&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&void 0===window.bcModSdk._shim10register)){const e=window.bcModSdk,o=Object.freeze(Object.assign(Object.assign({},e),{registerMod:(o,t,n)=>o&&"object"==typeof o&&"string"==typeof o.name&&"string"==typeof o.version?e.registerMod(o.name,o.version,"object"==typeof t&&!!t&&!0===t.allowReplace):e.registerMod(o,t,n),_shim10register:!0}));window.bcModSdk=o}return window.bcModSdk}();return"undefined"!=typeof exports&&(Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=y),y}();


async function BRC_Main() {

	const modApi = bcModSdk.registerMod({
	name: 'BRC',
	fullName: 'Better Remote Control',
	version: BRC_Version,
	repository: 'https://github.com/itsFro/BRC/',
});

    let brcSettings = {};
 //await waitFor(() => ServerIsConnected);
 BRCCommands();
 chatRoomOverlay();

    	function chatRoomOverlay() {
		modApi.hookFunction(
			"ChatRoomDrawCharacterOverlay", 3, (args, next) => {
                 if (showhide == 1){
                DrawButton(1000, 830, 60, 60, "V - Off", "#ceffce", "", "");
                DrawButton(1000, 760, 60, 60, "V - Low", "#ccf79a", "", "");
                DrawButton(1000, 690, 60, 60, "V - Mid", "#f2f5a5", "", "");
                DrawButton(1000, 620, 60, 60, "V - High", "#f9d198", "", "");
                DrawButton(1000, 550, 60, 60, "V - Max", "#f6bbbb", "", "");

                DrawButton(1000, 400, 60, 60, "B - Off", "#ceffce", "", "");
                DrawButton(1000, 330, 60, 60, "B - Low", "#ccf79a", "", "");
                DrawButton(1000, 260, 60, 60, "B - Mid", "#f2f5a5", "", "");
                DrawButton(1000, 190, 60, 60, "B - High", "#f9d198", "", "");
                DrawButton(1000, 120, 60, 60, "B - Max", "#f6bbbb", "", "");

                 }

                  next(args);
            });
       		modApi.hookFunction(
			"ChatRoomClick", 4, (args, next) => {
if (showhide == 1){
if(MouseIn(1000, 830, 60, 60)) {
settoyu_vulv(0);
return;
}
if(MouseIn(1000, 760, 60, 60)) {
settoyu_vulv(1);
return;
}
if(MouseIn(1000, 690, 60, 60)) {
settoyu_vulv(2);
return;
}
if(MouseIn(1000, 620, 60, 60)) {
settoyu_vulv(3);
return;
}
if(MouseIn(1000, 550, 60, 60)) {
settoyu_vulv(4);
return;
}

if(MouseIn(1000, 400, 60, 60)) {
settoyu_butt(0);
return;
}
if(MouseIn(1000, 330, 60, 60)) {
settoyu_butt(1);
return;
}
if(MouseIn(1000, 260, 60, 60)) {
settoyu_butt(2);
return;
}
if(MouseIn(1000, 190, 60, 60)) {
settoyu_butt(3);
return;
}
if(MouseIn(1000, 120, 60, 60)) {
settoyu_butt(4);
return;
}
}
                  next(args);
            });

       		modApi.hookFunction(
			"ChatRoomResize", 11, (args, next) => {

	if (
		CharacterGetCurrent() == null
		&& CurrentScreen == "ChatRoom"
		&& document.getElementById("InputChat")
		&& document.getElementById("TextAreaChatLog")
	) {
        if (showhide == 1){
		ElementPositionFix("TextAreaChatLog", ChatRoomFontSize, 1065, 66, 928, 835);
		ElementPosition("InputChat", 1490, 950, 860, 82);
       // return;
        } else if (showhide == 0) {
        ElementPositionFix("TextAreaChatLog", ChatRoomFontSize, 1005, 66, 988, 835);
		ElementPosition("InputChat", 1456, 950, 900, 82);
        }
             }
               //   next(args);
            });


        }
    function settoyu_vulv(power) {
    let C2 = ChatRoomCharacter.find((a) => a.MemberNumber === Number(tsyn));
       if (typeof C2 !== "undefined") {
    let OptionGroup = VibratorModeOptions['Standard'];
   let Option = OptionGroup[power];
      let intensity_item = C2.Appearance.find((a) => a.Asset.Group.Name === "ItemVulva");

      if (typeof intensity_item !== "undefined") {
        if (intensity_item.Asset.AllowEffect?.includes("Vibrating")){
      let OldIntensity1 = intensity_item.Property.Intensity;
         VibratorModeSetProperty(intensity_item, Option.Property);
    VibratorModePublish(C2, intensity_item, OldIntensity1, power-1);
    CharacterRefresh(C2);
 ChatRoomCharacterItemUpdate(C2, 'ItemVulva');
    }
      }
     }else if (typeof C2 == "undefined" && remoteplay == 1){

     	ServerSend("AccountBeep",  {"MemberNumber": Number(tsyn),
	"BeepType": "BRC_Remote",
	"Message": "BRC_Remote_Play,ItemVulva,"+power
		}
      );
     }
    }

 function settoyu_butt(power) {
    let C2 = ChatRoomCharacter.find((a) => a.MemberNumber === Number(tsyn));
    if (typeof C2 !== "undefined"){
    let OptionGroup = VibratorModeOptions['Standard'];
   let Option = OptionGroup[power];
      let intensity_item = C2.Appearance.find((a) => a.Asset.Group.Name === "ItemButt");
      if (typeof intensity_item !== "undefined") {
         if (intensity_item.Asset.AllowEffect?.includes("Vibrating")){
      let OldIntensity1 = intensity_item.Property.Intensity;
    VibratorModeSetProperty(intensity_item, Option.Property);
    VibratorModePublish(C2, intensity_item, OldIntensity1, power-1);
    CharacterRefresh(C2);
    ChatRoomCharacterItemUpdate(C2, 'ItemButt');
    }
  }
   } else if (typeof C2 == "undefined" && remoteplay == 1){
     	ServerSend("AccountBeep",  {"MemberNumber": Number(tsyn),
	"BeepType": "BRC_Remote",
	"Message": "BRC_Remote_Play,ItemButt,"+power
		}
      );
     }
    };


    function settplayer_vulv(power){
       
   let OptionGroup = VibratorModeOptions['Standard'];
         let Option = OptionGroup[power];
      let intensity_item = Player.Appearance.find((a) => a.Asset.Group.Name == "ItemVulva");
        if (typeof intensity_item !== "undefined") {
        if (intensity_item.Asset.AllowEffect?.includes("Vibrating")){
       let OldIntensity1 = intensity_item.Property.Intensity;
        let nickname = CharacterNickname(Player);
        let assetname = intensity_item.Asset.Description.toLowerCase();
       if (OldIntensity1 != power-1){
         VibratorModeSetProperty(intensity_item, Option.Property);
    VibratorModePublish(Player, intensity_item, OldIntensity1, power-1);
    CharacterRefresh(Player);
 ChatRoomCharacterItemUpdate(Player, 'ItemVulva');
  //  var Direction = power-1 > OldIntensity1 ? "Increase" : "Decrease";
    var powertext = {
        0: nickname + "'s " + assetname + " is remotely controlled and stops vibrating.",
        1:  nickname + "'s " + assetname + " is remotely controlled and set to low.",
        2:  nickname + "'s " + assetname + " is remotely controlled and set to medium.",
        3:  nickname + "'s " + assetname + " is remotely controlled and set to high.",
        4:  nickname + "'s " + assetname + " is remotely controlled and set to max."
        }
       // console.log (powertext[power]);
           if (CurrentScreen == "ChatRoom") {
     ServerSend("ChatRoomChat", {Content: "BRC_Remoteplay",Type: "Action",Target: null,Dictionary: [{ Tag: "MISSING PLAYER DIALOG: BRC_Remoteplay", Text: powertext[power] }]});
           }
  }
        }}
    };

       function settplayer_butt(power){
      let OptionGroup = VibratorModeOptions['Standard'];
     let Option = OptionGroup[power];
      let intensity_item = Player.Appearance.find((a) => a.Asset.Group.Name == "ItemButt");
           if (typeof intensity_item !== "undefined") {
             if (intensity_item.Asset.AllowEffect?.includes("Vibrating")){
       let OldIntensity1 = intensity_item.Property.Intensity;
        let nickname = CharacterNickname(Player);
        let assetname = intensity_item.Asset.Description.toLowerCase();
       if (OldIntensity1 != power-1){
         VibratorModeSetProperty(intensity_item, Option.Property);
    VibratorModePublish(Player, intensity_item, OldIntensity1, power-1);
    CharacterRefresh(Player);
 ChatRoomCharacterItemUpdate(Player, 'ItemButt');
  //  var Direction = power-1 > OldIntensity1 ? "Increase" : "Decrease";
    var powertext = {
        0: nickname + "'s " + assetname + " is remotely controlled and stops vibrating.",
        1:  nickname + "'s " + assetname + " is remotely controlled and set to low.",
        2:  nickname + "'s " + assetname + " is remotely controlled and set to medium.",
        3:  nickname + "'s " + assetname + " is remotely controlled and set to high.",
        4:  nickname + "'s " + assetname + " is remotely controlled and set to max."
        }
      //  console.log (powertext[power]);
           if (CurrentScreen == "ChatRoom") {
     ServerSend("ChatRoomChat", {Content: "BRC_Remoteplay",Type: "Action",Target: null,Dictionary: [{ Tag: "MISSING PLAYER DIALOG: BRC_Remoteplay", Text: powertext[power] }]});
           }
  }
             }}
    };

modApi.hookFunction("ServerAccountBeep", 4, (args, next) => {
  const data = args[0];

   if (typeof data.Message !== "undefined" && data.BeepType == "BRC_Remote") {
   if (data.Message.includes ("BRC_Remote_Play")){
       if (remoteplay = 1){
      let splitarray = data.Message.split (",")

       if (splitarray[1] == "ItemVulva" && splitarray[2] >= 0 && splitarray[2] <= 4){
        //     console.log (data);
           settplayer_vulv (Number(splitarray[2]));
      } else if (splitarray[1] == "ItemButt" && splitarray[2] >= 0 && splitarray[2] <= 4){
         settplayer_butt (Number(splitarray[2]));
       }
       }
   }
   }
next(args);
});


  async function waitFor(func, cancelFunc = () => false) {
    while (!func()) {
      if (cancelFunc()) return false;
      await sleep(10);
    }
    return true;
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }


     //handles help commands
 async function BRCCommands() {
	await waitFor(() => !!CommandCombine);

	var modCommands = [
	  {
		Tag: "syncto",
		Description: "Sync Control to Member number",
		Action: args => {
		  //can prob put case here
		  Commandsyncto(args.split(" "));
		}
	  },
      	  {
		Tag: "brc",
		Description: "Better Remmote Control Settings",
		Action: args => {
		  //can prob put case here
		  CommandHelp(args.split(" "));
		}
	  }


	  ];
	CommandCombine(modCommands);
  }

  function CommandHelp(argsList)
  {
  let d = argsList[0];
  switch (d) {
  case "":
  ChatRoomSendLocal("<b>Better Remmote Control Help</b>\n"+
                    "<i>/syncto (Member Number)</i>: Syncs the controller to Member.\n" +
					"<i>/brc show</i>: Shows remote control.\n" +
                    "<i>/brc hide</i>: Hides remote control.\n" +
                    "<i>/brc remoteplay</i>: Toggles remote play on and off.\n"
				   );
  break;
  case "show":
  ChatRoomSendLocal("BRC - will now be shown ");
showhide = 1;
        ElementPositionFix("TextAreaChatLog", ChatRoomFontSize, 1065, 66, 928, 835);
		ElementPosition("InputChat", 1490, 950, 860, 82);

  break;
            case "hide":
  ChatRoomSendLocal("BRC - will now be hidden ");
showhide = 0;
                  ElementPositionFix("TextAreaChatLog", ChatRoomFontSize, 1005, 66, 988, 835);
		ElementPosition("InputChat", 1456, 950, 900, 82);

  break;
          case "remoteplay":
          if (remoteplay == 0){
                ChatRoomSendLocal("BRC - Remote Play Enabled");
              //switch on
              remoteplay = 1;
          } else if (remoteplay == 1) {
              ChatRoomSendLocal("BRC - Remote Play Disabled");
              //switch off
          remoteplay = 0;
          };

  break;

  }
  };
  function Commandsyncto(argsList)
  {
  let d = argsList[0];
  switch (d) {
  case "":
  ChatRoomSendLocal("<b>To Sync controls with user use /synto (Member number) </b>\n"+
					"example : /syncto 123456"
				   );
  break;
      default:
  ChatRoomSendLocal("Syncing Remote to : " + d);
          tsyn = d
  break;
  }
  };

};
BRC_Main();
