// Cloudflare Worker Linktree site code

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const response = new Response('Hello, Linktree!', { status: 200 })
  return response
}