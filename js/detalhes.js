var json_data = '{"games":[{"index":0,"title":"Rise of the Tomb Raider","title_sep":[{"v":"Rise of the","s":"1_25"},{"v":"Tomb Raider","s":"2"}],"image_icon":"TR.jpg","image_bg":"TR.jpg","description":"Lorem impsun","link":"Lara/lara.html"},{"index":1,"title":"Mortal Kombat","title_sep":[{"v":"Mortal Kombat","s":"2"}],"image_icon":"MK.jpg","image_bg":"MK.jpg","description":"Lorem impsun","link":"escorpiao/Mortal.html"},{"index":2,"title":"Super Mario","title_sep":[{"v":"Super Mario","s":"2"}],"image_icon":"MR.jpg","image_bg":"MR.jpg","description":"Lorem impsun","link":"mario/index.html"},{"index":3,"title":"Need for Speed World","title_sep":[{"v":"Need for Speed","s":"1_25"},{"v":"World","s":"2"}],"image_icon":"NFS.jpg","image_bg":"NFS.jpg","description":"Lorem impsun","link":"Mia/mia.html"},{"index":4,"title":"Donkey Kong","title_sep":[{"v":"Donkey Kong","s":"2"}],"image_icon":"DK.jpg","image_bg":"DK.jpg","description":"Lorem impsun","link":"Gorila/Donkey.html"}]}';
var img_url = './imgs/';
var slide_link = 'Mia/mia.html';

var slide_element = "<div class=\"slide-area\" onclick=\"_click();\" aria-label=\"%index%\" id=\"%id%\">"+// LI
    "<a class=\"slide-link-click\" href=\"%link%\" style=\"display:none;\" id=\"slide-link-%index%\"></a>"+
"<!-- caixa principal -->"+
"<div class=\"slide-box\">"+// SLIDE-BOX
"<!-- imagem de fundo -->"+
"<div class=\"slide-img\">"+// SLIDE-IMG
"<img src=\"%image1%\" alt=\"%title%\">"+
"</div>"+// \SLIDE-IMG
"<!-- bordas -->"+
"<div class=\"slide-borders\">"+// SLIDE-BORDERS
"<div class=\"top-bottom\"></div>"+
"<div class=\"left-right\"></div>"+
"</div>"+// \SLIDE-BORDERS
"<!-- titulo -->"+
"<div class=\"slide-title\">"+// SLIDE-TITLE
"%title_sep%"+
"</div>"+// \SLIDE-TITLE
"</div>"+// \SLIDE-BOX
"</div>";// \LI
var title_sep_base = '<span class="ft-%sx">%v</span>';
