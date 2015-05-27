function kosto()
{
console.log('kosto?')
alert('hoho')
$(".ytp-segmented-control-deselected").click()
}
chrome.browserAction.onClicked.addListener(kosto);
kosto();

