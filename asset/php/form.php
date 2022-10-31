<?php

 
if (isset($_POST['valider'])) 
{
    if(isset($_POST["nom"]) AND isset($_POST["email"]) AND isset($_POST["commentaire"]) AND isset($_POST["sujet"]))

        if(!empty($_POST["nom"]) AND !empty($_POST["email"]) AND !empty($_POST["commentaire"]  AND !empty($_POST["sujet"]))
        {
             
            {
    
                $nom= htmlspecialchars($_POST["nom"]);
                $email = htmlspecialchars($_POST["email"]);
                $commentaire = htmlspecialchars($_POST["commentaire"]);
                $sujet = htmlspecialchars($_POST["sujet"]);
            
                echo "<h4>$nom $email $commentaire bien envoyé</h4>";
            }
        }
}
?>
