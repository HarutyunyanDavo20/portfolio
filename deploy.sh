echo "Deploying files to server..."
scp -r dist/* dav@89.46.33.135:/home/dav/server/portfolio

echo "Done"