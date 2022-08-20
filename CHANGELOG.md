# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2022-08-21
### Removed
 - Removed Links from Resume type
 - Removed Interest and Skill section from Resume
 - Removed Hero.contacts componenet 

 ### Changed
 - Made hero type a single on resume

 ### Added
 - Added new Resume.Skill componenet
 - Added new Resume.Interest componenet
 - Added new Resume.Contacts componenet

## [1.1.2] - 2022-08-14
### Changed
 - Upgraded Strapi to 4.3.4

## [1.1.1] - 2022-08-06
### Removed
- Removed Nav collection Type

### Aded
- Added NavBar collection Type
- Added Strava to About collection Type

## [1.1.0] - 2022-08-03
### Removed
- Removed Cloudinary media uploads from dev

### Added
- Added a siteLogo to Global content type
- Added favicon to to Global content type

### Changed
 - Changed defaultSEO on Global Collection type to be single and not repeteable
 - Upgraded Strapi to 4.3.2

## [1.0.2] - 2022-08-02
### Changed
- Increase min connections to the db so there is at least always two. This will hopefully speed up the tags reloading if the site hasn't been hit in awhile.

## [1.0.1] - 2022-08-01
### Changed
- Fixed DB time out issues https://github.com/strapi/strapi/issues/8117

## [1.0.0] - 2022-08-01
### Added
- Initial Release
