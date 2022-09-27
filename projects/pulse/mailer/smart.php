<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = '';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '';                                 // Наш логин
$mail->Password = '';                                 // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('', 'Pulse');   // myemail, От кого письмо 
$mail->addAddress('');     // Add a recipient / куда отправлять письма 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}



// Файлы phpmailer 4.0
// require 'phpmailer/PHPMailer.php';
// require 'phpmailer/SMTP.php';
// require 'phpmailer/Exception.php';

// // Переменные, которые отправляет пользователь
// $name = $_POST['name'];
// $phone = $_POST['phone'];
// $email = $_POST['email'];

// // Формирование самого письма
// $title = "Заголовок письма";
// $body = "
// <h2>Новое письмо</h2>
// <b>Имя:</b> $name<br>
// <b>Почта:</b> $email<br><br>
// <b>Сообщение:</b><br>$phone
// ";

// // Настройки PHPMailer
// $mail = new PHPMailer\PHPMailer\PHPMailer();
// try {
//     $mail->isSMTP();   
//     $mail->CharSet = "UTF-8";
//     $mail->SMTPAuth   = true;
//     //$mail->SMTPDebug = 2;
//     $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

//     // Настройки вашей почты
//     $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
//     $mail->Username   = 'vladdeveloper74@gmail.com'; // Логин на почте
//     $mail->Password   = 'djRT54FHJS4gewgjkloigsdw434a'; // Пароль на почте
//     $mail->SMTPSecure = 'ssl';
//     $mail->Port       = 465;
//     $mail->setFrom('vladdeveloper74@gmail.com', 'Имя отправителя'); // Адрес самой почты и имя отправителя

//     // Получатель письма
//     $mail->addAddress('maxko111@yandex.ru');  
//     // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

//     // Прикрипление файлов к письму
// if (!empty($file['name'][0])) {
//     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//         $filename = $file['name'][$ct];
//         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//             $rfile[] = "Файл $filename прикреплён";
//         } else {
//             $rfile[] = "Не удалось прикрепить файл $filename";
//         }
//     }   
// }
// // Отправка сообщения
// $mail->isHTML(true);
// $mail->Subject = $title;
// $mail->Body = $body;    

// // Проверяем отравленность сообщения
// if ($mail->send()) {$result = "success";} 
// else {$result = "error";}

// } catch (Exception $e) {
//     $result = "error";
//     $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
// }

// // Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
?>