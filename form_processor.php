<?php
include_once "SmsSender.php";
include_once "Utils.php";

if (isset($_POST['phone'])) {
    $phone = $_POST['phone'];
} else {
    header('Location: fail.php?reason=Не%20указан%20телефон');
}
if (isset($_POST['name'])) {
    $name = $_POST['name'];
} else {
    header('Location: fail.php?reason=Не%20указано%20имя');
}

$isSmsSuccess = smsForAdministrator($phone, $name);
$isEmailSuccess = sendEmail("dabessonov@yandex.ru", $phone, $name, $isSmsSuccess);

if (!$isEmailSuccess) {
    header('Location: fail.php?reason=Сбой%20уведомлений.%20Позвоните%20нам!');
}

function sendEmail($address, $phone, $name, $isSmsSuccess = true)
{
    $mes = "Заказ обратного звонка!\nИмя клиента: $name\nТелефон: $phone\n\nСвяжитесь с клиентом как можно быстрее!";
    if (!$isSmsSuccess) $mes .= "\n\nSMS не доставлено!";

    $sub = 'Заказ обратного звонка';

    //$email = 'call-back@videonablyudenie.info'; // от кого
    $send = mail($address, $sub, $mes);
    //$headers = 'From: webmaster@example.com';
    //$send = mail($address, $sub, $mes, "Content-type:text/plain; charset = utf-8\r\nFrom:$email");
    //$send = mail($address, $sub, $mes, $headers);
    //echo 'Email: ' . $send . '<br>';
    return $send;
}

function smsNotification($phone, $text)
{
    $api = new SmsSender(1); //TODO testMode=1
    $r = $api->send($phone, $text);
    return $r['isSuccess'];
}

function smsForAdministrator($phone, $name)
{
    $admin_phone = '89515575856';
    $translitName = Utils::convertToTranslite($name);
    $smsText = "Client: $translitName $phone. Videonabludenie";
    return smsNotification($admin_phone, $smsText);
}

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript"> (function (d, w, c) {
            (w[c] = w[c] || []).push(function () {
                try {
                    w.yaCounter33558068 = new Ya.Metrika({ id: 33558068, clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true });
                } catch (e) {
                }
            });
            var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () {
                n.parentNode.insertBefore(s, n);
            };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";
            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else {
                f();
            }
        })(document, window, "yandex_metrika_callbacks");</script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/33558068" style="position:absolute; left:-9999px;" alt=""/></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->

    <meta http-equiv="refresh" content="3; url=index.html">
    <title>Спасибо за заявку</title>
    <link type="text/css" rel="stylesheet" href="css/global.css">
    <style type="text/css">
        body {
            text-align: center;
            background-color: rgb(130, 227, 74);
            font-weight: 700;
            font-size: 26px;
        }

        div#text-container {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300px;
            height: 200px;
            margin-top: -100px;
            margin-left: -150px;
        }

        p {
            font-size: 12px;
            margin-top: 30px;
        }
    </style>
</head>
<body>
<div id="text-container">
    <h1>Спасибо за заявку!</h1>

    <h2>С Вами скоро свяжутся</h2>

    <p>Вы будете перенаправлены на главную страницу через <span>3</span> секунды</p>

    <p><a href="index.html">На главную страницу</a></p>
</div>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
<script>
    yaCounter30665247.reachGoal('SUCCESS_FORM_SEND');

    dec();

    function dec() {
        setTimeout(function () {
            var val = $("span").html();
            if (val > 1) {
                $("span").html(val - 1);
                dec();
            } else {
                location.replace("/index.html");
            }
        }, 1000);
    }
</script>

</body>
</html>
