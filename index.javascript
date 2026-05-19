let currentFontSize = 18;
const storyElement = document.getElementById('story-content');
const fontSizeVal = document.getElementById('font-size-val');

// 1. Thay đổi cỡ chữ
function changeFontSize(amount) {
  currentFontSize += amount;
  if(currentFontSize < 14) currentFontSize = 14; // Không cho nhỏ quá hại mắt
  if(currentFontSize > 32) currentFontSize = 32; // Không cho to quá vỡ khung
  
  storyElement.style.fontSize = currentFontSize + 'px';
  fontSizeVal.innerText = currentFontSize + 'px';
}

// 2. Thay đổi Font chữ
function changeFontFamily(fontName) {
  storyElement.style.fontFamily = fontName;
}

// 3. Thay đổi màu nền (Màu nền đổi, màu chữ tự thay đổi theo để dễ đọc)
function changeTheme(bgColor, textColor) {
  storyElement.style.backgroundColor = bgColor;
  storyElement.style.color = textColor;
}
