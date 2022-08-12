function show(id) {
    var show = $(".dialog").css("display");
    $(".dialog").css("display", show == "none" ? "block" : "none");
    switch (id) {
        case "YN":
            // 修改弹窗标题
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("云南");
            // 修改内容，支持html
            $(".contain").html("<button>圆通大桥</button>");
            break;
        case "NMG":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("内蒙古");
            $(".contain").html("<button>包头黄河大桥</button><button>乌海湖大桥</button>");
            break;
        case "BJTJ":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("北京、天津");
            $(".contain").html("<button>新首钢大桥</button>");
            break;
        case "JL":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("吉林");
            $(".contain").html("<button>临江门大桥</button>");
            break;
        case "SC":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("四川");
            $(".contain").html("<button>红星桥</button><button>九眼桥</button>");
            break;
        case "SD":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("山东");
            $(".contain").html("<button>胶州湾大桥</button>");
            break;
        case "SX":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("山西");
            $(".contain").html("<button>风陵渡黄河公路大桥</button>");
            break;
        case "GX":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("广西");
            $(".contain").html("<button>解放桥</button>");
            break;
        case "JSSH":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("江苏、上海");
            $(".contain").html("<button>水门桥</button><button>扬州运河大桥</button><button>上海-崇启大桥</button><button>沪通铁路长江大桥</button>");
            break;
        case "HB":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("河北");
            $(".contain").html("<button>彩虹桥</button>");
            break;
            case "HN":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("河南");
            $(".contain").html("<button>黄河公路大桥</button><button>许昌北海大桥</button>");
            break;
            case "ZJ":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("浙江");
            $(".contain").html("<button>钱塘江大桥</button><button>杭州湾跨海大桥</button>");
            break;
            case "HUN":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("湖南");
            $(".contain").html("<button>橘子洲大桥</button><button>南津渡大桥</button>");
            break;
            case "GS":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("甘肃");
            $(".contain").html("<button>银滩黄河大桥</button><button>深安黄河大桥</button>");
            break;
            case "CQ":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("重庆");
            $(".contain").html("<button>千厮门嘉陵江大桥</button>");
            break;
            case "HLJ":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("黑龙江");
            $(".contain").html("<button>中俄黑龙江大桥</button>");
            break;

        default:
            break;
    }
}
function close() {
    var show = $(".dialog").css("display");
    $(".dialog").css("display", show == "none" ? "block" : "none");
}
