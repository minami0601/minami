let vid = document.getElementById("movie2");
vid.playbackRate = 0.5;

$(function () {
    $(window).scroll(function () {
        $(".animate").each(function () {
            var targetAnime = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            console.log(targetAnime);
            console.log(scroll);
            console.log(windowHeight);
            if (scroll > targetAnime - windowHeight + 200) {
                console.log('hello');
                $(this).addClass("moving");
            }
        });
    });

    let delaySpeed = 500;
    let fadeSpeed = 500;

    $(window).on('load', function () {
        $('.title').each(function (i) {
            $(this).delay(i * (delaySpeed)).animate({
                'opacity': '1',
            }, fadeSpeed);
        });
    });


});

let mySwiper = new Swiper('.swiper-container', {
    // オプションパラメータ(一部のみ抜粋)
    loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
    speed: 1000, // スライドが切り替わるトランジション時間(ミリ秒)。
    slidesPerView: 3, // 何枚のスライドを表示するか
    spaceBetween: 10, // スライド間の余白サイズ(ピクセル)
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'coverflow', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)

    // スライダーの自動再生
    // autoplay: true 　のみなら既定値での自動再生
    autoplay: {
        delay: 2000, // スライドが切り替わるまでの表示時間(ミリ秒)
        stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
        disableOnInteraction: true ,// ユーザーのスワイプ操作を検出したら自動再生を中止するか
        reverseDirection: false
    },

    // レスポンシブ化条件
    breakpoints: {
        // 980ピクセル幅以下になったら
        980: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // 640ピクセル幅以下になったら
        640: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    },

    // ページネーションを表示する場合
    pagination: {
        el: '.swiper-pagination',　 // ページネーションを表示するセレクタ
    },

    // 前後スライドへのナビゲーションを表示する場合
    navigation: {
        nextEl: '.swiper-button-next', // 次のスライドボタンのセレクタ
        prevEl: '.swiper-button-prev', // 前のスライドボタンのセレクタ
    },

    // スクロールバーを表示する場合
    scrollbar: {
        el: '.swiper-scrollbar', // スクロールバーを表示するセレクタ
    }
});
