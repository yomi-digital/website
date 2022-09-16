<?php
$response = [];
$posts = returnDBObject("SELECT * FROM datatype_blog", [], 1);
$authors = returnDBObject("SELECT * FROM datatype_authors", [], 1);
$profileDetails = array();
foreach ($authors as $author) {
    $profileDetails[$author['id']] = $author;
}
foreach ($posts as $post) {
    $data = [];
    foreach ($post as $key => $value) {
        if (is_string($key)) {
            $data[$key] = html_entity_decode(($value));
        }
    }
    $data["slug"] = toAscii($data['title']);
    $data['author'] = null;
    $idAuthor = $post['author'];
    $dataAuthor = returnDBObject("SELECT * FROM datatype_authors WHERE id=?", [intval($idAuthor)]);
    $data['author'] = $dataAuthor["name"] . ' ' . $dataAuthor["surname"];
    $data['author_img'] = $dataAuthor["avatar"];
    array_push($response, $data);
}
echo json_encode($response);
