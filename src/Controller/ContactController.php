<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function index()
    {
        return $this->render('contact/index.html.twig', [
            'controller_name' => 'ContactController',
        ]);
    }

    /**
     * @Route("/contact/envoyer", name="contact_sendMail")
     */
    public function sendMail()
    {
        if ($_POST['prenom'] && $_POST['nom'] && $_POST['email'] && $_POST['objet'] && $_POST['tel'] && $_POST['message']) {
            $email = $_POST['email'];
            $objet = $_POST['objet'];
            $messages = $_POST['message'];
            $to = 'cherifabdoulaziz@gmail.com';
            $subject = $objet;
            $message = $messages;
            $headers = array(
//                'From' => $email,
                'From' => $email,
                'Reply-To' => $email,
                'X-Mailer' => 'PHP/' . phpversion()
            );

            mail($to, $subject, $message, $headers);
            return new JsonResponse([
                'status' => 'success',
                'message' => 'Votre message a été envoyé avec succès.'
            ]);
        }
        else {
            return new JsonResponse([
                'status' => 'error',
                'message' => 'Tous les champs sont obligatoires'
            ]);
        }
    }
}
