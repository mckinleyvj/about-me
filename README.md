# fabulous-me

![reactJS](https://img.shields.io/static/v1?label=reactJS&message=reactJS&color=red)

## Table of Contents

-   [Contributing](#contributing)
-   [Installation](#installation)
-   [Deployment](#deployment)
-   [Usage](#usage)
-   [Resources](#resources)
-   [Author](#author)
-   [Questions](#questions)

## Description

<Reserved>

## Contributing

I am always looking for contributors of all skill levels! If you have something in mind to add to the project, try out by [creating an issue](https://github.com/mckinleyvj/fabulous-me/issues) and let's see where we can go from there.

[Back to top](#fabulous-me)

## Installation

Fork and clone the repository, then install the required packages to run the application.

1. Fork the repository to your Github profile.

2. Clone the repository to your local computer.

```bash
git clone git@github.com:mckinleyvj/fabulous-me.git
```

3. Req: Install <kbd>node</kbd> dependencies. Use the latest version or a version higher than 14.0.0

```bash
npm i || npm install n -g || npm install v15.0.0 (Specific version)
```

4. Req: Install <kbd>MySQL</kbd> schema and seeds. Make sure to have MySQL installed on your local machine.

```bash
mysql -u root -p
source db/schema.sql
quit
```

5. Inject demodata to MySQL

```bash
npm run seed
```

6. Run the application invoking <kbd>npm run start</kbd>

```bash
npm run start
```

[Back to top](#fabulous-me)

## Deployment

Please visit the live site at https://mac-fabulous-me.herokuapp.com/

[Back to top](#fabulous-me)

## Usage

-   This project creates a new database on the local MySQL database server then injects data into it. It works as a social network site for posting thoughts and people to provide comments.
-   This project does not collect any bank details or personal information for misuse.
-   This project is open source and is available to all developers that finds interest to enhancing features by raising [an issue](https://github.com/mckinleyvj/fabulous-me/issues) or simply by [contacting me](#questions).

[Back to top](#fabulous-me)

## Resources

-   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [NodeJS](https://nodejs.org/)
-   Node Packages:
    -   [bcrypt](https://www.npmjs.com/package/bcrypt)
    -   [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
    -   [dotenv](https://www.npmjs.com/package/dotenv)
    -   [express](https://www.npmjs.com/package/express)
    -   [express-handlebars](https://www.npmjs.com/package/express-handlebars)
    -   [express-session](https://www.npmjs.com/package/express-session)
    -   [mysql2](https://www.npmjs.com/package/mysql2)
    -   [sequelize](https://www.npmjs.com/package/sequelize)
    -   [moment](https://www.npmjs.com/package/moment)

[Back to top](#fabulous-me)

## Author

Mckinley Jimenez

-   [Portfolio](https://mckinleyvj.github.io/professional-portfolio/)
-   [GitHub](https://github.com/mckinleyvj)
-   [LinkedIn](https://www.linkedin.com/in/mckinleyjimenez)

[Back to top](#fabulous-me)

## Questions

Visit my [GitHub profile](https://github.com/mckinleyvj) for more information about me and my other repositories.

You can also send me an <a href="mailto:mckinleyvj@gmail.com?">email</a> to know more information.

[Back to top](#fabulous-me)
