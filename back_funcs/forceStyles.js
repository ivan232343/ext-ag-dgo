
let modifidier = 0
for (let styleindex = 0; styleindex < document.styleSheets.length; styleindex++) {
    const stylesheet = document.styleSheets[styleindex];
    const linkvalidate = stylesheet.href !== null ? stylesheet.href : '';
    // console.log(linkvalidate.includes('all-themes.css'))
    if (linkvalidate.includes('all-themes.css')) {
        modifidier = styleindex
    }
}
document.styleSheets[modifidier].addRule("a.toggled.waves-effect, a.waves-effect.waves-block:hover, a.waves-effect.waves-block:hover > *,.spinner-layer.pl-red", "color:rgb(117, 60, 255) !important")
document.styleSheets[modifidier].addRule(".bg-indigo, .bg-blue,#div_client_elite", "background: #462f76 !important;")
document.styleSheets[modifidier].addRule(".body,.bg-custom", "background: #462f76e3;color: white !important;")
document.styleSheets[modifidier].addRule("button.bg-indigo", "background: #6028d5 !important;border-radius: 1rem !important;box-shadow: #340839 2px 2px 12px 2px !important;")
document.styleSheets[modifidier].addRule(".theme-deep-orange .navbar ", "background: #6028d5 ;")
document.styleSheets[modifidier].addRule(".theme-deep-orange .navbar ,.theme-red .navbar", " background-color: #472d7d00 !important;box-shadow: unset;-webkit-box-shadow: unset;-moz-box-shadow: unset;-ms-box-shadow: unset;")
document.styleSheets[modifidier].addRule("table.table.table.bg-blue a, table.table.table.bg-blue a:active, table.table.table.bg-blue a:focus", "   background-color: unset !important;color: white;text-decoration: none;font-weight: bolder;font-size: 1.5rem;word-break: break-word;")

// 40319340