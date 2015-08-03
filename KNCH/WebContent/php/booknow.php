<?php #session_start();


	$first_name = $_POST['fname']; 
 
    $last_name = $_POST['lname']; 
	
	if(isset($_POST['gender'])){ 
		$gender = $_POST['gender']; 
	}
 
    $email_from = $_POST['email']; 
 
    $telephone = $_POST['phone']; 
 
    $person = $_POST['persons']; 
	
	$contact_address = $_POST['address']; 
	
	$treatment_name = $_POST['treatment']; 
	
	if(isset($_POST['dot'])){
		
		$date_of_treatment = $_POST['dot']; 
	}
	if(isset($_POST['time'])){
		$prefferedTime = $_POST['time'];
	}
	if(isset($_POST['requests'])){
		$special_requests =  $_POST['requests'];
	}
	$name = $first_name.$last_name;
		
    $address = 'knchwgl@gmail.com';

	$subject  = "New Request for Appoinment from {$name} to the treatment {$treatment_name} ";
	if(get_magic_quotes_gpc()) { $comment = stripslashes($comment); }
    $msg = '<html><body>';		
	$msg .= '<table rules="all" style="border: 1px solid black;" cellpadding="10">';
	$msg .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($name) . "</td></tr>";
	$msg .= "<tr><td><strong>Gender:</strong> </td><td>" . strip_tags($gender) . "</td></tr>";
	$msg .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($email_from) . "</td></tr>";
	$msg .= "<tr><td><strong>Phone No:</strong> </td><td>" . strip_tags($telephone) . "</td></tr>";
	$msg .= "<tr><td><strong>Address:</strong> </td><td>" . strip_tags($contact_address) . "</td></tr>";
	$msg .= "<tr><td><strong>Treatment:</strong> </td><td>" . strip_tags($treatment_name) . "</td></tr>";
	$msg .= "<tr><td><strong>Date of Treatment:</strong> </td><td>" . strip_tags($date_of_treatment) . "</td></tr>";
	$msg .= "<tr><td><strong>Time:</strong> </td><td>" . strip_tags($prefferedTime). "</td></tr>";
	$msg .= "<tr><td><strong>No., of Person:</strong> </td><td>" . strip_tags($person). "</td></tr>";
	$msg .= "<tr><td><strong>Special Requests:</strong> </td><td>" . strip_tags($special_requests). "</td></tr></table><br><br></body></html>";
	$headers = "From: " . $email_from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	if(mail($address, $subject, $msg, $headers))
	{
			 echo "<p class='ajax_success'><h3>Thanks for Contact Us.</h3></p>";
			 
	}
	else
	{		 
			 echo "<p class='ajax_failure'>Sorry, Try again Later.</p>";
	}
	$patientsubject="you have booked appointment in KNCH";
	$patientmsg="Thank you for contacting KNCH";
	if(mail($email_from, $patientsubject, $patientmsg, "From: $address\r\nReturn-Path: $address\r\n"))
	{
			 echo "<p class='ajax_success'><h3>Have a nice day.</p></h3>";
	}
	else
	{
			echo "<p class='ajax_failure'>Sorry, Try again Later.</p>"; 
	}
?>