<?php
$response = [];
$authors = returnDBObject("SELECT * FROM datatype_authors", [], 1);
foreach ($authors as $author) {
    $data = [];
    foreach ($author as $key => $value) {
        if (is_string($key)) {
            $data[$key] = $value;
        }
    }
    array_push($response, $data);
}
echo json_encode($response);
