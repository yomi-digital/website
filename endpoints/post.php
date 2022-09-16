<?php
$response = [
    "prev" => [],
    "post" => [],
    "next" => []
];
$posts = returnDBObject("SELECT * FROM datatype_blog", [], 1);

foreach ($posts as $i => $post) {

    $dd = [];
    foreach ($post as $key => $value) {
        if (is_string($key)) {
            $dd[$key] = html_entity_decode(($value));
        }
    }
    $dd["slug"] = toAscii($dd['title']);

    if ($dd['slug'] == $data->slug) {
        $response['post'] = $dd;
        $prev = $i - 1;
        $next = $i + 1;
        if (isset($posts[$prev])) {
            $posts[$prev]["slug"] = toAscii($posts[$prev]['title']);
            $response['prev'] = $posts[$prev];
        }
        if (isset($posts[$next])) {
            $posts[$next]["slug"] = toAscii($posts[$next]['title']);
            $response['next'] = $posts[$next];
        }
    }
}
echo json_encode($response);
