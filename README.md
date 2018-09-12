# Feedback API

[![pipeline status](https://gitlab.com/timmo/feedback-api/badges/master/pipeline.svg)](https://gitlab.com/timmo/feedback-api/commits/master)

[![Docker Version][version-shield]][microbadger]
[![Docker Layers][layers-shield]][microbadger]
[![Docker Pulls][pulls-shield]][dockerhub]

![Supports armhf Architecture][armhf-shield]
![Supports aarch64 Architecture][aarch64-shield]
![Supports amd64 Architecture][amd64-shield]
![Supports i386 Architecture][i386-shield]

API for [Feedback App][feedback-app]

## Setup

See [here][feedback-app].

## Usage

- GET `/` - Test the API is active.
- POST `/response` - Send a response. `id` and `status` are required.

```json
{
  "id": 1001,
  "status": 0,
  "comment": "Neutral response optional test comment."
}
```

- POST `/response/get-all` - Get all responses. The `TOKEN` you set in `.env`
 is required.

```json
{
  "token": "cuxrTlt7jXKuJhDYpASo1XYlN69tfh7mqOYGrXIz5Zx0dZb9tNiYaFOkZLoQ9tdR"
}
```

[feedback-app]: https://gitlab.com/timmo/feedback-app
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[dockerhub]: https://hub.docker.com/r/timmo001/feedback-api
[layers-shield]: https://images.microbadger.com/badges/image/timmo001/feedback-api.svg
[microbadger]: https://microbadger.com/images/timmo001/feedback-api
[pulls-shield]: https://img.shields.io/docker/pulls/timmo001/feedback-api.svg
[version-shield]: https://images.microbadger.com/badges/version/timmo001/feedback-api.svg