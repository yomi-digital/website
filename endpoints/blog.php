<?php
$response = [];
$posts = returnDBObject("SELECT * FROM datatype_posts", [], 1);
foreach ($posts as $post) {
    $data = [];
    foreach ($post as $key => $value) {
        if (is_string($key)) {
            $data[$key] = html_entity_decode(($value));
        }
    }
    $data["slug"] = toAscii($data['title']);
    array_push($response, $data);
}
echo json_encode($response);
