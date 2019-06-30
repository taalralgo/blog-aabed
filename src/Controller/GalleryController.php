<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class GalleryController extends AbstractController
{
    /**
     * @Route("/gallery", name="gallery")
     */
    public function index()
    {
        return $this->render('gallery/index.html.twig', [
            'controller_name' => 'GalleryController',
        ]);
    }
}
