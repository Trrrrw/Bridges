function show(id) {
    var show = $(".dialog").css("display");
    $(".dialog").css("display", show == "none" ? "block" : "none");
    switch (id) {
        case "YN":
            // 修改弹窗标题
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("云南");
            // 修改内容，支持html
            $(".contain").html("<button>中俄黑龙江大桥</button>");
            break;
        case "NMG":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("内蒙古");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
        case "BJTJ":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("北京、天津");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
        case "JL":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("吉林");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
        case "SC":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("四川");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
        case "SD":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("山东");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
        case "SX":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("山西");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
        case "GX":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("广西");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
        case "JSSH":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("江苏、上海");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
        case "HB":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("河北");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
            case "HN":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("河南");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
            case "ZJ":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("浙江");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
            case "HUN":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("湖南");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
            case "GS":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("甘肃");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
            case "CQ":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("重庆");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;
            case "HLJ":
            $("div.dialog:last-child > div.content > div.aclose:first-child > span:first-child").html("黑龙江");
            $(".contain").html("<button>乌海湖大桥</button>");
            break;

        default:
            break;
    }
}
function close() {
    var show = $(".dialog").css("display");
    $(".dialog").css("display", show == "none" ? "block" : "none");
}
