import Head from 'next/head';
import Menu from '/components/Menu'
import { Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

function home() {
return (
    <div>
        <Head>
            <meta charset="UTF-8" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="trabalhos realizados ..."/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="author" content="Paulo Felix"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Portfólio|Paulo Felix</title>
            <link rel="stylesheet" href="css/style.css" class="css"></link>
        </Head>

        <Menu />
    

        <script src="custom.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <script type='text/javascript' src='public\static\script.js'></script>    
    


    </div>

)

}

export default home;