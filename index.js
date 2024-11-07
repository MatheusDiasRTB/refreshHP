const keysToReplaceValues = [
  { GOOGLE_FONT_FAMILY: "WEBFONTS.GOOGLE_FONT_FAMILY" },

  { BANNER_CONTAINER_BACKGROUND_COLOR: "BANNER.BACKGROUND" },
  { CONTAINER_MARGIN: "BANNER.MARGIN" },
  { BANNER_CONTAINER_BORDER: "BANNER.BORDER" },
  { BANNER_CONTAINER_BORDER_RADIUS: "BANNER.BORDER_RADIUS" },
  { BANNER_CONTAINER_BOX_SHADOW_INSET: "BANNER.BOX_SHADOW_INSET" },
  { GLOBAL_FONT_FAMILY: "BANNER.FONT_FAMILY" },
  { GLOBAL_FONT_SIZE: "BANNER.FONT_SIZE" },
  { GLOBAL_FONT_COLOR: "BANNER.FONT_COLOR" },
  { GLOBAL_FONT_WEIGHT: "BANNER.FONT_WEIGHT" },
  { BANNER_TOURISTIC: "BANNER.TOURISTIC" },
  { BANNER_CONTAINER_IMAGE_SIZE: "BANNER.IMAGE_SIZE" },
  { BANNER_CONTAINER_IMAGE_POSITION: "BANNER.IMAGE_POSITION" },
  { BANNER_CONTAINER_IMAGE_REPEAT: "BANNER.IMAGE_REPEAT" },
  { AFTER_ROLLOVER_ANIM_AGAIN: "BANNER.AFTER_ROLLOVER_ANIM_AGAIN" },
  { FASTBACK_ANIM_ENABLED: "BANNER.FASTBACK_ANIM_ENABLED" },
  { ENABLE_EXTRA_HTML: "BANNER.ENABLE_EXTRA_HTML" },
  { EXTRA_HTML: "BANNER.EXTRA_HTML" },
  { EXTRA_JS: "BANNER.EXTRA_JS" },
  { GLOBAL_TRACKER_LIMIT: "BANNER.TRACKER_LIMIT" },
  { CUSTOM_CLICK_TRACKER: "BANNER.CUSTOM_CLICK_TRACKER" },
  { FORCE_CONTAINER_MARGIN: "BANNER.FORCE_CONTAINER_MARGIN" },
  { SCREENS_MARGIN: "BANNER.SCREENS_MARGIN" },
  { START_AFTER_LOAD: "BANNER.START_AFTER_LOAD" },
  { FORCE_FASHIONSLIDER: "BANNER.FORCE_FASHIONSLIDER" },

  { LOGO_FILES: "LOGO.FILES" },
  { LOGO_GIF_ANIMATION: "LOGO.GIF_ANIMATION" },
  { LOGO_CONTAINER_BACKGROUND_COLOR: "LOGO.BACKGROUND" },
  { LOGO_CONTAINER_BORDER: "LOGO.BORDER" },
  { LOGO_CONTAINER_BOX_SHADOW: "LOGO.BOX_SHADOW" },
  { LOGO_CONTAINER_STYLE_HEIGHT: "LOGO.STYLE_HEIGHT" },
  { LOGO_CONTAINER_STYLE_WIDTH: "LOGO.STYLE_WIDTH" },
  { LOGO_ANIM_FADE_SPEED: "LOGO.ANIM_FADE_SPEED" },
  { LOGO_ANIM_INTERVAL: "LOGO.ANIM_INTERVAL" },
  { ADD_LOGO_TO_BOARD: "LOGO.ADD_TO_BOARD" },
  { LOGO_MARGIN_STEP: "LOGO.MARGIN_STEP" },
  {
    LOGO_VERTICAL_HOTIZONTAL_PROPORTIONS:
      "LOGO.VERTICAL_HOTIZONTAL_PROPORTIONS",
  },
  { DONT_COUNT_LOGO_CONTAINER_SIZE: "LOGO.DONT_COUNT_LOGO_CONTAINER_SIZE" },
  { FORCE_LOGO_COVER: "LOGO.FORCE_COVER" },
  { FORCE_LOGO_MARGIN: "LOGO.FORCE_MARGIN" },

  { OFFER_CONTAINER_BACKGROUND_COLOR: "OFFER.BACKGROUND" },
  { OFFER_CONTAINER_BORDER: "OFFER.BORDER" },
  { OFFER_CONTAINER_BORDER_RADIUS: "OFFER.BORDER_RADIUS" },
  { OFFER_CONTAINER_BOX_SHADOW: "OFFER.BOX_SHADOW" },
  { OFFER_CONTAINER_BOX_SHADOW_INSET: "OFFER.BOX_SHADOW_INSET" },
  { OFFER_MARGIN: "OFFER.MARGIN" },
  { OFFER_IMAGE_MARGIN: "OFFER.IMAGE_MARGIN" },
  { OFFER_HOVER_CONTAINER_BORDER: "OFFER.HOVER_BORDER" },

  { OFFER_HOVER_JUMPING_ANIM_ENABLED: "OFFER.HOVER_JUMPING_ANIM.ENABLED" },

  {
    OFFER_HOVER_CONTAINER_IRIS_BACKGROUND_COLOR: "OFFER.HOVER_IRIS_BACKGROUND",
  },

  { OFFER_OMNIBUS_FONT_COLOR: "OFFER.OMNIBUS.FONT_COLOR" },

  { OFFER_HOVER_INFO_ENABLED: "OFFER.HOVER_INFO.ENABLED" },

  { OFFER_BUTTON_TEXT: "OFFER.BUTTON.TEXT" },
  { OFFER_BUTTON_BACKGROUND_COLOR: "OFFER.BUTTON.BACKGROUND" },
  { OFFER_BUTTON_CONTAINER_BORDER: "OFFER.BUTTON.BORDER" },
  { OFFER_BUTTON_BORDER_RADIUS: "OFFER.BUTTON.BORDER_RADIUS" },
  { OFFER_BUTTON_CONTAINER_BOX_SHADOW: "OFFER.BUTTON.BOX_SHADOW" },
  { OFFER_BUTTON_FONT_SIZE: "OFFER.BUTTON.FONT_SIZE" },
  { OFFER_BUTTON_FONT_WEIGHT: "OFFER.BUTTON.FONT_WEIGHT" },
  { OFFER_BUTTON_CONTAINER_FONT_COLOR: "OFFER.BUTTON.FONT_COLOR" },
  { OFFER_BUTTON_FONT_SHADOW: "OFFER.BUTTON.FONT_SHADOW" },
  { OFFER_BUTTON_HOVER_BACKGROUND_COLOR: "OFFER.BUTTON.HOVER_BACKGROUND" },
  { OFFER_BUTTON_HOVER_CONTAINER_BORDER: "OFFER.BUTTON.HOVER_BORDER" },
  { OFFER_BUTTON_HOVER_CONTAINER_BOX_SHADOW: "OFFER.BUTTON.HOVER_BOX_SHADOW" },
  { OFFER_BUTTON_HOVER_CONTAINER_FONT_COLOR: "OFFER.BUTTON.HOVER_FONT_COLOR" },
  { BUTTON_ANIMATION_TIME: "OFFER.BUTTON.ANIMATION_TIME" },
  { BUTTON_HOVER_IN_BACKGROUND: "OFFER.BUTTON.HOVER_IN_BACKGROUND" },

  { OFFER_LOADER_BACKGROUND: "OFFER.LOADER.BACKGROUND" },

  { OFFER_NAME_CONTAINER_FONT_WEIGHT: "OFFER.NAME.FONT_WEIGHT" },
  { OFFER_NAME_CONTAINER_FONT_COLOR: "OFFER.NAME.FONT_COLOR" },
  { OFFER_NAME_MAX_LENGTH: "OFFER.NAME.MAX_LENGTH" },

  { OFFER_PRICE_ENABLED: "OFFER.PRICE.ENABLED" },
  { OFFER_PRICE_CONTAINER_BACKGROUND_COLOR: "OFFER.PRICE.BACKGROUND" },
  { OFFER_PRICE_CONTAINER_FONT_WEIGHT: "OFFER.PRICE.FONT_WEIGHT" },
  { OFFER_PRICE_CONTAINER_FONT_COLOR: "OFFER.PRICE.FONT_COLOR" },
  { OFFER_PRICE_CONTAINER_FONT_SHADOW: "OFFER.PRICE.FONT_SHADOW" },
  { PRICE_DISCOUNT_CUSTOM_PROPERTY: "OFFER.PRICE.DISCOUNT_CUSTOM_PROPERTY" },

  { HIDE_OLD_PRICE: "OFFER.PRICE.OLD.ENABLED" },
  { OFFER_OLDPRICE_CONTAINER_FONT_WEIGHT: "OFFER.PRICE.OLD.FONT_WEIGHT" },
  { OFFER_OLDPRICE_CONTAINER_FONT_COLOR: "OFFER.PRICE.OLD.FONT_COLOR" },
  { OFFER_OLDPRICE_CONTAINER_FONT_SHADOW: "OFFER.PRICE.OLD.FONT_SHADOW" },
  {
    OLDPRICE_DISCOUNT_CUSTOM_PROPERTY:
      "OFFER.PRICE.OLD.DISCOUNT_CUSTOM_PROPERTY",
  },

  { BANNER_SHOW_REGION: "OFFER.REGION.ENABLED" },
  { REGION_CUSTOM_PROPERTY: "OFFER.REGION.SOURCE" },
  { OFFER_REGION_FONT_SIZE: "OFFER.REGION.FONT_SIZE" },
  { ENLARGER_REGION_FONT_WEIGHT: "OFFER.REGION.FONT_WEIGHT" },
  { ENLARGER_REGION_FONT_COLOR: "OFFER.REGION.FONT_COLOR" },

  { OFFER_RIBBON_ENABLED: "OFFER.RIBBON.ENABLED" },
  { OFFER_RIBBON_ALWAYS: "OFFER.RIBBON.ALWAYS" },
  { OFFER_RIBBON_CALCULATE_PERCENT: "OFFER.RIBBON.CALCULATE_PERCENT" },
  { OFFER_RIBBON_MIN_PERCENT: "OFFER.RIBBON.MIN_PERCENT" },
  { OFFER_RIBBON_TEXT: "OFFER.RIBBON.TEXT" },
  { OFFER_RIBBON_TYPE: "OFFER.RIBBON.TYPE" },
  { OFFER_RIBBON_BACKGROUND_COLOR: "OFFER.RIBBON.BACKGROUND" },
  { OFFER_RIBBON_CONTAINER_BOX_SHADOW: "OFFER.RIBBON.SHADOW" },
  { OFFER_RIBBON_FONT_SIZE: "OFFER.RIBBON.FONT_SIZE" },
  { OFFER_RIBBON_FONT_WEIGHT: "OFFER.RIBBON.FONT_WEIGHT" },
  { OFFER_RIBBON_FONT_COLOR: "OFFER.RIBBON.FONT_COLOR" },
  { OFFER_RIBBON_FONT_SHADOW: "OFFER.RIBBON.FONT_SHADOW" },

  { BANNER_SHOW_STARS: "OFFER.STARS.ENABLED" },
  { STARS_CUSTOM_PROPERTY: "OFFER.STARS.SOURCE" },

  { OFFERS_CENTERED: "OFFER.CENTERED" },
  {
    TEMPLATE_PARAMETERS_OFFER_NAME_LENGTH_OVERWRITE_ENABLED:
      "OFFER.TEMPLATE_PARAMETERS_NAME_LENGTH_OVERWRITE_ENABLED",
  },
  { IMAGE_FILE_FORMAT: "OFFER.IMAGE_FILE_FORMAT" },
  { IMAGE_MOVE_DIRECTION: "OFFER.IMAGE_MOVE_DIRECTION" },

  { BANNER_ENLARGER_ANIM_ENABLED: "ENLARGER.ANIM_ENABLED" },
  { BANNER_ENLARGER_ANIM_TYPE: "ENLARGER.ANIM_TYPE" },
  { OFFER_ENLARGER_SHOW_SPEED: "ENLARGER.SHOW_SPEED" },
  { OFFER_ENLARGER_HIDE_SPEED: "ENLARGER.HIDE_SPEED" },
  { OFFER_ENLARGER_BORDER: "ENLARGER.BORDER" },
  { OFFER_ENLARGER_BORDER_RADIUS: "ENLARGER.BORDER_RADIUS" },

  { ENLARGER_IMAGE_MARGIN: "ENLARGER.IMAGE.MARGIN" },

  { OFFER_ENLARGER_BUTTON_FONT_SIZE: "ENLARGER.BUTTON.FONT_SIZE" },

  { OFFER_ENLARGER_INFOBAR_BACKGROUND: "ENLARGER.INFOBAR.BACKGROUND" },

  { OFFER_ENLARGER_NAME_CONTAINER_FONT_COLOR: "ENLARGER.NAME.FONT_COLOR" },

  { ROLL_TEXT: "ENLARGER.ROLL_TEXT.ENABLED" },
  { ROLL_TEXT_DIRECTION: "ENLARGER.ROLL_TEXT.DIRECTION" },
  { ROLL_TEXT_OPTIONS: "ENLARGER.ROLL_TEXT.OPTIONS" },

  { OFFER_ENLARGER_RIBBON_FONT_SIZE: "ENLARGER.RIBBON.FONT_SIZE" },

  { SLIDER: "SLIDER.DIRECTION" },
  { OFFER_JUMPING_FRAME_COLOR: "JUMPING_FRAME.COLOR" },
  { FRAME_ANIMATION_TIME: "JUMPING_FRAME.ANIMATION_TIME" },

  { BANNER_ARROWS_ENABLED: "ARROWS.ENABLED" },
  { ARROW_COLOR: "ARROWS.COLOR" },
  { ARROW_HOVER_COLOR: "ARROWS.HOVER_COLOR" },
  { ARROW_CLICK_EVENT: "ARROWS.CLICK_EVENT" },
  { ARROW_NOT_ACTIVE_ON_END: "ARROWS.NOT_ACTIVE_ON_END" },

  { BANNER_PLANCHE_ENABLED: "BOARD.ENABLED" },
  { BANNER_PLANCHE_CLOSEBTN_COLOR: "BOARD.CLOSE_BUTTON_COLOR" },
  { BANNER_PLANCHE_CLOSEBTN_HOVER_COLOR: "BOARD.CLOSE_BUTTON_HOVER_COLOR" },
  { BANNER_PLANCHE_CLOSE_BUTTON_CLOSES_SHOW: "BOARD.CLOSE_BUTTON_CLOSES_SHOW" },
  { BANNER_PLANCHE_START_DELAY: "BOARD.START_DELAY" },
  { BANNER_PLANCHE_SHOW_TIME: "BOARD.SHOW_TIME" },
  { BANNER_PLANCHE_INTERVAL: "BOARD.INTERVAL" },
  { BANNER_PLANCHE_NUMBER_OF_VIEWS: "BOARD.NUMBER_OF_VIEWS" },
  { BOARD_AGGRESSIVE: "BOARD.AGGRESSIVE" },
  { BANNER_PLANCHE_CLOSEBTN_COLOR: "BOARD.CLOSEBTN_COLOR" },
  { BANNER_PLANCHE_CLOSEBTN_HOVER_COLOR: "BOARD.CLOSEBTN_HOVER_COLOR" },

  { DYNAMIC_SLOGAN_ENABLED: "SLOGAN.ENABLED" },
  { DYNAMIC_SLOGAN_TEXT: "SLOGAN.TEXT" },
  { DYNAMIC_SLOGAN_BACKGROUND: "SLOGAN.BACKGROUND" },
  { DYNAMIC_SLOGAN_FONT_FAMILY: "SLOGAN.FONT_FAMILY" },
  { DYNAMIC_SLOGAN_FONT_WEIGHT: "SLOGAN.FONT_WEIGHT" },
  { DYNAMIC_SLOGAN_FONT_COLOR: "SLOGAN.FONT_COLOR" },
  { DYNAMIC_SLOGAN_TEXT_SHADOW: "SLOGAN.TEXT_SHADOW" },
  { DYNAMIC_SLOGAN_TEXT_TRANSFORM: "SLOGAN.TEXT_TRANSFORM" },

  { TIMER: "TIMER.OPTIONS" },

  { LEGAL_INFO_ENABLED: "LEGAL_INFO.ENABLED" },
  { LEGAL_INFO_TITLE: "LEGAL_INFO.TITLE" },
  { LEGAL_INFO_NOTES: "LEGAL_INFO.NOTES" },
  { LEGAL_INFO_CONTAINER_POSITION: "LEGAL_INFO.POSITION" },

  { BANNER_VIDEO_ENABLED: "VIDEO.ENABLED" },
  { AUDIO_ENABLED: "VIDEO.AUDIO_ENABLED" },
  { COVER_VIDEO: "VIDEO.COVER_VIDEO" },
  { ONE_MOVIE_FOR_ALL_RESOLUTIONS: "VIDEO.ONE_MOVIE_FOR_ALL_RESOLUTIONS" },
  { VIDEO_AVAILABLE_RESOLUTIONS: "VIDEO.AVAILABLE_RESOLUTIONS" },

  { OPTOUT_CONTAINER_POSITION_FOR_HORIZONTAL: "OPTOUT.POSITION_HORIZONTAL" },
  { OPTOUT_CONTAINER_POSITION_FOR_VERTICAL: "OPTOUT.POSITION_VERTICAL" },
  { OPTOUT_IMG_COLOR_TYPE: "OPTOUT.IMG_COLOR_TYPE" },

  { OMNIBUS_INFO_ENABLED: "OMNIBUS_INFO.ENABLED" },
  { OMNIBUS_INFO_ALWAYS_EXPANDED: "OMNIBUS_INFO.ALWAYS_EXPANDED" },
  { OMNIBUS_INFO_SOURCE: "OMNIBUS_INFO.SOURCE" },
  { OMNIBUS_INFO_TEXT: "OMNIBUS_INFO.TEXT" },
  { OMNIBUS_INFO_POSITION_HORIZONTAL: "OMNIBUS_INFO.POSITION_HORIZONTAL" },
  { OMNIBUS_INFO_POSITION_VERTICAL: "OMNIBUS_INFO.POSITION_VERTICAL" },
  { OMNIBUS_INFO_FONT_COLOR: "OMNIBUS_INFO.FONT_COLOR" },
  { OMNIBUS_INFO_FONT_FAMILY: "OMNIBUS_INFO.FONT_FAMILY" },
  { OMNIBUS_INFO_FONT_SIZE: "OMNIBUS_INFO.FONT_SIZE" },
  { OMNIBUS_INFO_FONT_WEIGHT: "OMNIBUS_INFO.FONT_WEIGHT" },
  { OMNIBUS_INFO_BACKGROUND: "OMNIBUS_INFO.BACKGROUND" },
  { OMNIBUS_INFO_HOVER_BACKGROUND: "OMNIBUS_INFO.HOVER_BACKGROUND" },
  { OMNIBUS_INFO_HOVER_FONT_COLOR: "OMNIBUS_INFO.HOVER_FONT_COLOR" },
];

const jsonFiles = [
  "wideboard_2023_11_02_settings.json",
  "wideboard_2022_11_01_settings.json",
  "wideboard_2022_07_15_settings.json",
  "wideboard_2022_06_23_settings.json",
  "wideboard_2020_06_01_settings.json",
  "terracota_2023_11_02_settings.json",
  "terracota_2022_11_01_settings.json",
  "terracota_2022_07_15_settings.json",
  "terracota_2022_06_23_settings.json",
  "terracota_2020_06_01_settings.json",
  "expander_2023_11_02_settings.json",
  "expander_2024_08_14_settings.json",
  "expander_2022_11_01_settings.json",
  "expander_2022_07_15_settings.json",
  "expander_2022_06_23_settings.json",
  "expander_2020_06_01_settings.json",
  "slimbox_2023_11_02_settings.json",
  "slimbox_2022_11_01_settings.json",
  "slimbox_2022_07_15_settings.json",
  "slimbox_2022_06_23_settings.json",
  "slimbox_2020_06_01_settings.json",
  "bigbox_2023_11_02_settings.json",
  "bigbox_2022_11_01_settings.json",
  "bigbox_2022_07_15_settings.json",
  "bigbox_2022_06_23_settings.json",
  "bigbox_2020_06_01_settings.json",
];

const dropdown = document.getElementById("jsonDropdown");
const input = document.getElementById("oldTemplateInput");

jsonFiles.forEach((file) => {
  const option = document.createElement("option");
  option.value = file;
  option.textContent = file;
  dropdown.appendChild(option);
});

dropdown.addEventListener("change", (event) => {
  const selectedFile = event.target.value;
  if (selectedFile == "0") {
    input.value = "";
    return;
  }
  fetchJSON(selectedFile);
});

function fetchJSON(filename) {
  fetch(`./coverageTests/${filename}`)
    .then((response) => response.json())
    .then((data) => {
      input.value = JSON.stringify(data, null, "\t");
    })
    .catch((error) => console.error("Error loading the JSON file:", error));
}

const copyBtn = document.getElementById("copy");

function copyUpdatedToClipboard() {
  const div = document.getElementById("changed");

  const textWithoutComments = (div.textContent || div.innerText).replace(
    /\/\/.*/g,
    ""
  );

  navigator.clipboard
    .writeText(textWithoutComments)
    .then(() => {
      copyBtn.innerHTML = "copied!";
      copyBtn.setAttribute("disabled", true);
      setTimeout(() => {
        copyBtn.innerHTML = "copy";
        copyBtn.removeAttribute("disabled");
      }, 2500);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

copyBtn.addEventListener("click", () => {
  copyUpdatedToClipboard();
});

function updateTemplate(oldTemplate, newTemplate) {
  keysToReplaceValues.forEach((mapping) => {
    const oldKey = Object.keys(mapping)[0];
    const newPath = mapping[oldKey].split(".");
    const oldValue = oldTemplate.MACROS[oldKey];

    if (oldValue === undefined) return;

    let valueToSet = oldValue;
    let target = newTemplate;

    for (let i = 0; i < newPath.length - 1; i++) {
      target = target[newPath[i]];
    }

    const finalKey = newPath[newPath.length - 1];

    switch (oldKey) {
      case "HIDE_OLD_PRICE":
        valueToSet = oldValue === "true" ? "false" : "true";
        break;
      // case "REGION_CUSTOM_PROPERTY":
      // case "STARS_CUSTOM_PROPERTY":
      //   valueToSet = `customProperties.${oldValue}`;
      //   break;
      case "EXTRA_HTML":
        valueToSet = oldValue.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      case "BANNER_CONTAINER_BACKGROUND_COLOR":
        const hexMatch = oldValue.match(
          /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})(?![0-9A-Fa-f])/
        );
        if (hexMatch) valueToSet = hexMatch[0];
        break;
    }

    target[finalKey] = valueToSet;
  });
  return newTemplate;
}

function launchDiff(oldTemplateStr, updatedTemplateStr) {
  var dmp = new diff_match_patch();

  var text1 = oldTemplateStr;
  var text2 = updatedTemplateStr;

  dmp.Diff_EditCost = 8;

  var d = dmp.diff_main(text1, text2);
  dmp.diff_cleanupEfficiency(d);

  var oldStr = "",
    newStr = "";

  for (var i = 0, j = d.length; i < j; i++) {
    var arr = d[i];
    if (arr[0] == 0) {
      oldStr += arr[1];
      newStr += arr[1];
    } else if (arr[0] == -1) {
      oldStr += "<span class='text-del'>" + arr[1] + "</span>";
    } else {
      newStr += "<span class='text-add'>" + arr[1] + "</span>";
    }
  }

  document.getElementById("original").innerHTML = oldStr;
  document.getElementById("changed").innerHTML = newStr
    .replace(
      `"OLD": {
				"ENABLED": "true",`,
      `"OLD": {
				"ENABLED": "true", <span class='comment'>//this one is set by the opposite value of "HIDE_OLD_PRICE"</span>`
    )
    .replace(
      `"OLD": {
				"ENABLED": "false",`,
      `"OLD": {
				"ENABLED": "true", <span class='comment'>//this one is set by the opposite value of "HIDE_OLD_PRICE"</span>`
    )
    .replace(
      `"FORMAT": "1,110.00 PLN",`,
      `"FORMAT": "1,110.00 PLN", <span class='comment'>//please set this manually</span>`
    );
  // .replace(
  //   `"GOOGLE_FONTS": "",`,
  //   newStr.includes(`"GOOGLE_FONT_FAMILY": ""`)
  //     ? `"GOOGLE_FONTS": "",`
  //     : `"GOOGLE_FONTS": "", <span class='comment'>//please set this manually</span>`
  // );
}

function handleFormSubmit(event) {
  event.preventDefault();

  const oldTemplateInput = document.getElementById("oldTemplateInput").value;
  const newTemplateInput = document.getElementById("newTemplateInput").value;

  const oldTemplate = JSON.parse(oldTemplateInput);
  const newTemplate = JSON.parse(newTemplateInput);

  const updatedTemplate = updateTemplate(
    oldTemplate,
    JSON.parse(JSON.stringify(newTemplate))
  );

  document.querySelector("#original").innerHTML = JSON.stringify(
    newTemplate,
    null,
    "\t"
  );
  document.querySelector("#changed").innerHTML = JSON.stringify(
    updatedTemplate,
    null,
    "\t"
  );

  const diffContainer = document.querySelector(".diff-container");
  const inputs = document.querySelector("#templateForm");
  inputs.style.display = "none";
  diffContainer.style.display = "flex";

  launchDiff(
    JSON.stringify(newTemplate, null, "\t"),
    JSON.stringify(updatedTemplate, null, "\t")
  );
}

document
  .getElementById("templateForm")
  .addEventListener("submit", handleFormSubmit);
