// Instantiate MDC Drawer
var drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

// Instantiate MDC Top App Bar (required)
const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));

var button = document.querySelector('.mdc-top-app-bar__navigation-icon');
button.addEventListener('click', function() {
    drawer.open = true;
});


const page_list = [
    'pages/overall_stats/IdSortedAvgDMG.html',
    'pages/overall_stats/IdSortedAvgEXP.html',
    'pages/overall_stats/IdSortedAvgFrags.html',
    'pages/overall_stats/IdSortedAvgKD.html',
    'pages/overall_stats/IdSortedAvgSD.html',
    'pages/overall_stats/IdSortedAvgSpot.html',
    'pages/overall_stats/IdSortedAvgSpotDMG.html',
    'pages/overall_stats/IdSortedAvgTier.html',
    'pages/overall_stats/IdSortedBattles.html',
    'pages/overall_stats/IdSortedBattleSurvived.html',
    'pages/overall_stats/IdSortedPR.html',
    'pages/overall_stats/IdSortedWinRate.html',
    'pages/special/IdSortedCreditShipAmount.html',
    'pages/special/IdSortedPremiumAmount.html',
    'pages/special/IdSortedPremiumRatio.html',
    'pages/special/PremiumShipRatioAmount.html',
    'pages/special/ActivePlayers.html',
    'pages/special/Whales.html'
]

var list = document.getElementsByClassName('mdc-list-item')
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', () => {
        document.getElementById('content').setAttribute('src', page_list[i])
    })
}