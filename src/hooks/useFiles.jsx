import Handlebars from 'handlebars';
import { useStore } from '../store/main';

const strToFile = (content, type, filename) => {
    const blob = new Blob([content], { type });
    return new File([blob], filename, { type });
};

export const useFiles = () => {
    const [data] = useStore();

    const template = Handlebars.compile(`
<!doctype html>
<html>

<!--
Profile generated using "Sinpapeles Profile Builder" at https://profile.sinpapeles.xyz
-->

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>{{title}}</title>
    <script src="https://7004roudcacjku52d8up9m9hql6i35nvicm0t92tt8poqsadqqm2tu8.siasky.net/" type="module"></script>
    <style>
        body{margin:0; height: 100vh;}
    </style>

    <meta name="author" content="https://profile.sinpapeles.xyz">
    <meta property="og:title" content="{{title}}" />
    <meta property="og:description" content="{{description}}" />
    {{#if image }}
    <meta property="og:image" content="{{image}}" />
    {{/if}}
</head>

<body>
    <sinpapeles-profile data='{{{profile}}}'></sinpapeles-profile>
</body>

</html>
`);

    const profile = JSON.stringify(data);

    const html = template({
        title: data.title.text && data.title.show ? data.title.text : 'Sinapeles :: Profile',
        description: data.bio.text && data.bio.show ? data.bio.text : 'Check my profile',
        profile,
        image: data.image.show && data.image.src,
    });

    return [
        strToFile(html, 'text/html', 'index.html'),
        strToFile(profile, 'application/json', 'data.json'),
    ];
};
