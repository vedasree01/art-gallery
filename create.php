<?php      
    include('connection.php');  
    $username = $_POST['username'];  
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmpassword=$_POST['confirmpassword'];

    $username = stripcslashes($username);  
    $email = stripcslashes($email);  
    $password = stripcslashes($password);  
    $confirmpassword = stripcslashes($confirmpassword);

    $username = mysqli_real_escape_string($con, $username); 
    $email = mysqli_real_escape_string($con, $email);  
    $password = mysqli_real_escape_string($con, $password);
    $confirmpassword = mysqli_real_escape_string($con, $confirmpassword); 
    if($password != $confirmpassword)
    {
        echo '<script>alert("Passwords are not Matching")</script>';
    }
    else
    {
        $sql ="Insert into create_account (username,email,password,confirmpassword) values ('$username','$email','$password','$confirmpassword')";  
        $result = mysqli_query($con, $sql); 
        if($result) 
        {
            echo '<script>alert("Account Created Succesfully")</script>'; 
        }
        else
        {
            echo '<script>alert("Unable to create")</script>';
        }
    }
?>