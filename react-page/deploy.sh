npm run build
OUT_DIR=build

aws s3 sync $OUT_DIR s3://aws-workshop-barranquilla-js-react \
    --delete \
    --exclude $OUT_DIR/sw.js \
    --exclude "*.html" \
    --metadata-directive REPLACE \
    --cache-control max-age=31536000,public \
    --acl public-read


aws s3 cp $OUT_DIR s3://aws-workshop-barranquilla-js-react \
    --exclude "*" \
    --include "*.html" \
    --include $OUT_DIR/sw.js \
    --metadata-directive REPLACE \
    --cache-control max-age=31536000,public \
    --acl public-read \
    --recursive


process_html_file(){
    file_path="$1"
    relative_path="${file_path#$OUT_DIR/}"
    file_name="${relative_path%.html}"

    aws s3 cp $OUT_DIR s3://aws-workshop-barranquilla-js-react/$file_name.html s3://aws-workshop-barranquilla-js-react/$file_name
}


find $OUT_DIR -type f -name "*.html" | while read -r html_file; do
    process_html_file "$html_file"
done


aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id E3FB2IHVNBT31W --paths "/*"