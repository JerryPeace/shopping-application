FROM node:14-slim as builder
ENV APP_HOME_DIR=/app
ENV PATH $APP_HOME_DIR/node_modules/.bin:$PATH
WORKDIR $APP_HOME_DIR

ADD src $APP_HOME_DIR/src
ADD public $APP_HOME_DIR/public
ADD .eslintignore .eslintrc.json .prettierrc yarn.lock package.json tsconfig.json $APP_HOME_DIR/

WORKDIR $APP_HOME_DIR
RUN yarn
RUN yarn build

CMD [ "yarn", "start" ]
