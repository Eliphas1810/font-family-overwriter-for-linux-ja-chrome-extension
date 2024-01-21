var fontFamilyForLinuxJa = "'TakaoPGothic', 'Noto Sans CJK JP', 'YuGothic', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', 'MS PGothic', sans-serif";

["html", "body"].forEach(function (tagName) {
    document.getElementsByTagName(tagName.toUpperCase())[0].style.setProperty("font-family", fontFamilyForLinuxJa, "important");
});

["div", "p", "input", "textarea"].forEach(function (tagName) {
    var tags = document.getElementsByTagName(tagName.toUpperCase());
    for (var index = 0; index < tags.length; index++) {
        tags[index].style.setProperty("font-family", fontFamilyForLinuxJa, "important");
    }
});
