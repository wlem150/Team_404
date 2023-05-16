$(document).ready(function () {
  $("#sejong").click(function () {
    // 새로운 ul 요소를 가져옴
    var sejong = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체<img class="District__Item__Button__Img"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAABHNCSVQICAgIfAhkiAAAAXpJREFUSEu917FKA0EQBuDbF7CKIUWKFBb2BiSCkjS+R3oLH8F3yBNJQAvLRBBikSKQiErwCc5/ZBIml7vbnZ09D5ZdyOVjmZ292XV5no+zLHtAW6DdO+fm6M2PA/wD5YSlb/Qj4DOrTPALkL6AthhfA3+14AR3AUzRegL6xPgG+Fss7uiPTeB/cBP4Hk6NH8ACf8aYYr971DE/ghmnhaQFjcZLYQ9+hWx592VLJVyDbzjPa/Fa2IJ7YYHTgnZECGpnHgQzfsYLGoQHw1pcBWtwNezBB0jFJb0TBQv8CeNTsaArTsVlNMz4OfpHtHYBvzTBAqft3xL4JBVcnLUNRoEoC8UHZn4RPWOgtGGKi7ffjVEwoxTXyl2ohkNQdR6HoipYgwbDQHt4Oe1nk9Fi/fNWkZjSRBXbW/diimnQ0ev/yn9FTG0HFj4cmk9BB+mW+sTZ3DE29Ux3H/uyq8IXfhymuCrIyw3dPyhPzTcnmvEdsAnaGu02BUrh+AU3Het2tPvd3gAAAABJRU5ErkJggg=="
                alt=""></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">조치원</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all"><span class="Super__Keyword"><img
                    class="Region__Column__Super__Img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAABHNCSVQICAgIfAhkiAAAA9JJREFUWEe9WE1LVGEUPu/MSObHXHBTG1cKUW4KlVKovHdGAjfaB6MzKm2KkvwBIS1sYf6AMgoKgmSuBUkYuMmZwYXlQsSNECLopkwi5F7HVJy5b+eW1nzcuR/ve2dmO+85z/Oce855n3sJMP6qZt6IXo8WZwzXwyYVKXydsCbwx+V5DD7PGJ9MabR+JxjZZCLArZ7CgBIIP9PJMxHgUU8B5lUp3HJUOccEeNQjeIpqpGE72LPCTIBLPYWHaiA8nNk3jirApZ7Ciuo52QCimGImwKWekBZV7JnPnRrbFeBRrwF9vi1F7hqNrG0CrOoppZuqx1cPYijJTIBHfRrojaQUeVdoYdmqALN6gCmc+U6zbWlJgEP9v3XLRYBZPYFBVQyPWd0VphVgVk9hUZF6moAQXH7mP1MCLOr1dYtjdxYbb9kK3PQyYlWPYzeiBiIP7ICbEmBRjwnXlD3hNHR07HMRYFWPM9+GpZ+1C16wAozqX6LFuuUE3JAAq3qnwPp5bNixvClgVO8cn9KE8tPXnkWgVOqp7g0q081woU/NIlAa9XRr3+tr3LscWsvqgVKop0APKHjFbal7Ls8TlkI9JbRfFSPjeZasFOo1gNFtKTxkaMmKrR7HbQr9YJfR5USKr54uKeW+VmgN7RpaMiEuJ/CPNueDbB2BTbeR8qUbf13q3+CyZEfBQmxiAAh9ag3958RuimitO2Lvktl5S0uWGeyPRZcJIWesCOAzx10DXdh0U1ZnbRNw1it0SJEio1bgpn4gNxh7RbfW16ySoiEZR0PSb3UubxGZBVTORE94CXzD8nvMzmHZ51S/KkLTnQNXCVTH5RFEzlsiOSBrUKY1Khd7t+yC23sEiYTPr33fJARqCiamVNWopznzvd8uCcsm9CeifYSS14USYrunEbw9GezW94njnzUBi49R1OYLCNMiqpiVz5WlYdGk9C+UQOS2Y9kZAVYvJq/wwE1DgENLBaFQuigE/J/e1sBuGkcPjuUCZFoqHnDTKRBi0ft4fRpss2xLVRwCdNgjJE6tY/LaTAAjS1UUAtXxiU4P0Pd5pTewVEUhIMSjH/EjajAzeSFL5ToBvPPr8M5fzS59YUvlOgF/TH6MnT/4P7G5pXKXwMKHCkFJ/sBP2BV6YjuWylUC/oR8Dz+qPDlMastSuUsgLq/i5qtzYqlcI1AVi0peQmJ/E9q3VK4REGLyJD77q04tlSsEjs/KtWUpuo6r97NTS+UKAbRcj9By9bBYKn4C09PHhHLli6aRKyyWipuAbrm0tPcrq6XiJiAk5CZFDC/wJmKN/w0wTMyoNjG5dwAAAABJRU5ErkJggg=="
                    alt="">고복저수지</span></button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="garamdong">가람동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="gowundong">고운동</button></li>
    <li class="District__Item"><button class="District__Item__Button false" id="guemnammyeon">금남면</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="nasungdong">나성동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="dajungdong">다정동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="daepyeoungdong">대평동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="dodamdong">도담동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="bangokdong">반곡동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="boramdong">보람동</button></li>
    <li class="District__Item"><button class="District__Item__Button false" id="bugangmyeon">부강면</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="sanoulldong">산울동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="seromdong">새롬동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="sodamdong">소담동</button></li>
    <li class="District__Item"><button class="District__Item__Button false" id="sojungmyeon">소정면</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="armdong">아름동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="ajindong">어진동</button></li>
    <li class="District__Item"><button class="District__Item__Button false" id="yeongimyeon">연기면</button></li>
    <li class="District__Item"><button class="District__Item__Button false" id="yeondongmyeon">연동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false" id="yeonseomyeon">연서면</button></li>
    <li class="District__Item"><button class="District__Item__Button false" id="janggunmyeon">장군면</button></li>
    <li class="District__Item"><button class="District__Item__Button false" id="jeondongmyeon">전동면</button></li>
    <li class="District__Item"><button class="District__Item__Button false" id="jeonuimyeon">전의면</button></li>
    <li class="District__Item"><button class="District__Item__Button false" id="jochiwonum">조치원읍</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="jongchondong">종촌동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="jiphyeondong">집현동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="hansoldong">한솔동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="hapgangdong">합강동</button></li>
    <li class="District__Item"><button class="District__Item__Button false all" id="haemildong">해밀동</button></li>
</ul>`;

    $(".District__List__Box").children(":nth-child(2), :nth-child(3)").remove();
    // 새로운 ul 요소를 추가
    $(".District__List__Box").append(sejong);

    $(document).ready(function () {
      $(".District__List").each(function () {
        $(this)
          .find(".District__Item__Button")
          .click(function () {
            // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
            $(this)
              .parents(".District__List")
              .find(".District__Item__Button.now")
              .removeClass("now");
            // 클릭한 요소에 'now' 클래스 추가
            $(this).addClass("now");
            if (!$(this).find(".District__Item__Button__Img").length) {
              $(this).append(
                '<img class="District__Item__Button__Img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAABHNCSVQICAgIfAhkiAAAAXpJREFUSEu917FKA0EQBuDbF7CKIUWKFBb2BiSCkjS+R3oLH8F3yBNJQAvLRBBikSKQiErwCc5/ZBIml7vbnZ09D5ZdyOVjmZ292XV5no+zLHtAW6DdO+fm6M2PA/wD5YSlb/Qj4DOrTPALkL6AthhfA3+14AR3AUzRegL6xPgG+Fss7uiPTeB/cBP4Hk6NH8ACf8aYYr971DE/ghmnhaQFjcZLYQ9+hWx592VLJVyDbzjPa/Fa2IJ7YYHTgnZECGpnHgQzfsYLGoQHw1pcBWtwNezBB0jFJb0TBQv8CeNTsaArTsVlNMz4OfpHtHYBvzTBAqft3xL4JBVcnLUNRoEoC8UHZn4RPWOgtGGKi7ffjVEwoxTXyl2ohkNQdR6HoipYgwbDQHt4Oe1nk9Fi/fNWkZjSRBXbW/diimnQ0ev/yn9FTG0HFj4cmk9BB+mW+sTZ3DE29Ux3H/uyq8IXfhymuCrIyw3dPyhPzTcnmvEdsAnaGu02BUrh+AU3Het2tPvd3gAAAABJRU5ErkJggg==">'
              );
            }
          });
      });
    });
      
    $(document).ready(function () {
      $(".all").click(function () {
        // 새로운 ul 요소를 가져옴
        var all = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(all);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });
      
      
    $(document).ready(function () {
      $("#guemnammyeon").click(function () {
        // 새로운 ul 요소를 가져옴
        var guemnammyeon = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">감성리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">국곡리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금천리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남곡리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">달전리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대박리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도남리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도암리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">두만리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">박산리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">발산리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉암리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부용리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성강리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성덕리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신촌리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영곡리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영대리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영치리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용담리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용포리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">원봉리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">장재리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">축산리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">호탄리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">황용리</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(guemnammyeon);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });

    
      
      
    $(document).ready(function () {
      $("#bugangmyeon").click(function () {
        // 새로운 ul 요소를 가져옴
        var bugangmyeon = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">갈산리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금호리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">노호리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">등곡리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문곡리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부강리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산수리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">행산리</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(bugangmyeon);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });
      
    $(document).ready(function () {
      $("#sojungmyeon").click(function () {
        // 새로운 ul 요소를 가져옴
        var sojungmyeon = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고등리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대곡리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">소정리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">운당리</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(sojungmyeon);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });
      
    $(document).ready(function () {
      $("#yeongimyeon").click(function () {
        // 새로운 ul 요소를 가져옴
        var yeongimyeon = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">누리리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">눌왕리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">보통리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">세종리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">수산리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">연기리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">한별리</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(yeongimyeon);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });
      
    $(document).ready(function () {
      $("#yeondongmyeon").click(function () {
        // 새로운 ul 요소를 가져옴
        var yeondongmyeon = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">내판리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">노송리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">다솜리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">명학리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">문주리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송용리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">예양리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용호리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">응암리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">합강리</button></li>
</ul>
`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(yeondongmyeon);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });
      
    $(document).ready(function () {
      $("#yeonseomyeon").click(function () {
        // 새로운 ul 요소를 가져옴
        var yeonseomyeon = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">고복리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">국촌리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">기룡리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉암리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">부동리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">성제리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신대리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">쌍류리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">쌍전리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">와촌리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용암리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">월하리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청라리</button></li>
</ul>

`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(yeonseomyeon);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });
      
    $(document).ready(function () {
      $("#janggunmyeon").click(function () {
        // 새로운 ul 요소를 가져옴
        var janggunmyeon = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금암리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">대교리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">도계리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉안리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">산학리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송문리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송정리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송학리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용암리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">용현리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">은용리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">태산리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">평기리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">하봉리</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(janggunmyeon);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });
      
    $(document).ready(function () {
      $("#jeondongmyeon").click(function () {
        // 새로운 ul 요소를 가져옴
        var jeondongmyeon = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">노장리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">미곡리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">보덕리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉대리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">석곡리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송곡리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송성리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">송정리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">심중리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청람리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">청송리</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(jeondongmyeon);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });
      
    $(document).ready(function () {
      $("#jeonuimyeon").click(function () {
        // 새로운 ul 요소를 가져옴
        var jeonuimyeon = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">관정리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">금사리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">노곡리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">다방리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">달전리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">동교리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서정리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신방리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신정리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신흥리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">양곡리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">영당리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">원성리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">유천리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">읍내리</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(jeonuimyeon);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });
      
      
    $(document).ready(function () {
      $("#jochiwonum").click(function () {
        // 새로운 ul 요소를 가져옴
        var jochiwonum = `<ul class="District__List">
    <li class="District__Item"><button class="District__Item__Button  now">전체</button></li>
    <li class="District__Item"><button class="District__Item__Button false">교리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">남리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">명리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">번암리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">봉산리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">상리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">서창리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신안리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">신흥리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">원리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">정리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">죽림리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">침산리</button></li>
    <li class="District__Item"><button class="District__Item__Button false">평리</button></li>
</ul>`;

        // 새로운 ul 요소를 추가

        if ($(".District__List__Box").children(":nth-child(3)").length) {
          $(".District__List__Box").children(":nth-child(3)").remove();
        }
        $(".District__List__Box").append(jochiwonum);
        $(document).ready(function () {
          $(".District__List").each(function () {
            $(this)
              .find(".District__Item__Button")
              .click(function () {
                // 현재 ul 요소 안에서 기존에 선택된 요소에 대해 'now' 클래스 제거
                $(this)
                  .parents(".District__List")
                  .find(".District__Item__Button.now")
                  .removeClass("now");
                // 클릭한 요소에 'now' 클래스 추가
                $(this).addClass("now");
              });
          });
        });
      });
    });
      
  });
});
