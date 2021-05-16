# Connections: Career Paths in Biomedical Informatics

Website for a video project that documents the training experiences of predoctoral and postdoctoral trainees from 16 National Library of Medicine-funded biomedical informatics and data science training programs.

This project is funded by the National Library of Medicine Administrative Supplement Funds to the Harvard Medical School Biomedical Informatics and Data Science Training program, 3T15LM007092-26S1. 

## Principal Investigators
Nils Gehlenborg, PhD (@ngehlenborg) and Alexa McCray, PhD in the Department of Biomedical Informatics at Harvard Medical School (@hms-dbmi) led the production of this video project.

## Production Dates
Interviews were recorded in Spring 2019 and Summer 2019. Postproduction was completed in 2020. 

## License
This website and all content are made available under the CC-BY 4.0 license.

# Videos

All video content is available on YouTube at https://www.youtube.com/playlist?list=PLDf0t9MNzNSrGllo6bZre8_8PUgy3R-p3.

# Development

Test the website locally:

```sh
yarn install
yarn start
```

To deploy the website, first build the react application:

```sh
yarn build
```

Then, you will be able to see a `/build` folder generated. Copy and paste all files and folders below `/build` to the AWS S3 bucket (s3://connections.careers).
