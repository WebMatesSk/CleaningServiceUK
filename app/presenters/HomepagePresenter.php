<?php

namespace App\Presenters;


use Nette\Utils\FileSystem;
use Nette\Utils\Strings;
use Nette\Utils\Validators;
use Symfony\Component\DomCrawler\Crawler;

class HomepagePresenter extends BasePresenter
{
	/*public function renderDefault()
	{
	    $html = file_get_contents("http://webdesign-finder.com/html/pretty-press/images/");

	    $crawler = new Crawler();
	    $crawler->addHtmlContent($html);

        $files = $crawler->filterXPath("//a")->each(function($node) {
            if(Strings::contains($node->text(), ".")) {
                return $node->text();
            }
        });

        $filesMapped = array_filter($files, function ($value) {
            return !Validators::isNone($value);
        });

        foreach ($filesMapped as $f) {
            $content = file_get_contents("http://webdesign-finder.com/html/pretty-press/images/" . $f);
            FileSystem::write("images/" . $f, $content);
        }
	    dump("ok");exit;
	}*/
}
