import express from 'express';
import expressWs from 'express-ws';

const { app } = expressWs(express());

export {
    app
}