//@ts-ignore
const express = require('express')
const router = express()
const port = 3000

/**
 * @swagger
 * components:
 *   schemas:
 *     Events:
 *       type: object
 *       required:
 *         - codEmpresa
 *         - codEmpresaFilial
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the event
 *           codEmpresa:
 *           type: number
 *           description: The auto-generated id of the codEmpresa
 *  *        codEmpresaFilial:
 *           type: number
 *           description: The auto-generated id of the codEmpresa
 *         title:
 *           type: string
 *           description: The event title
 *         description:
 *           type: string
 *           description: The description of the event
 *       example:
 *         id: 01
 *         codEmpresa: 02
 *         codEmpresa: 02
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: The events managing API
 */

/**
 * @swagger
 * /Events:
 *   get:
 *     summary: Returns the list of all the events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: The list of the Events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Events'
 */

router.get('/', (req, res) => res.send('Hello World!'))


module.exports = router