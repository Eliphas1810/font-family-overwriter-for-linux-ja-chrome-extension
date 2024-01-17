var fontFamilyForLinuxJa = "'TakaoPGothic', 'Noto Sans CJK JP', 'YuGothic', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', 'MS PGothic', sans-serif";

document.getElementsByTagName("html".toUpperCase())[0].style.fontFamily = fontFamilyForLinuxJa;
document.getElementsByTagName("body".toUpperCase())[0].style.fontFamily = fontFamilyForLinuxJa;

var divTags = document.getElementsByTagName("div".toUpperCase());
for (var index = 0; index < divTags.length; index++) {
    divTags[index].style.fontFamily = fontFamilyForLinuxJa;
}

var pTags = document.getElementsByTagName("p".toUpperCase());
for (var index = 0; index < pTags.length; index++) {
    pTags[index].style.fontFamily = fontFamilyForLinuxJa;
}

var inputTags = document.getElementsByTagName("input".toUpperCase());
for (var index = 0; index < inputTags.length; index++) {
    inputTags[index].style.fontFamily = fontFamilyForLinuxJa;
}

var textareaTags = document.getElementsByTagName("textarea".toUpperCase());
for (var index = 0; index < textareaTags.length; index++) {
    textareaTags[index].style.fontFamily = fontFamilyForLinuxJa;
}
