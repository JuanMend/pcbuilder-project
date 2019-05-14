UPDATE users 
SET image = $2
WHERE username = $1
returning *;