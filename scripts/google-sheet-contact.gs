const SHEET_ID = '1clDq8S7eRv7_xsi23VFFPXFbwaz6sQj-2qkWxO840E0'
const HEADERS = ['Timestamp', 'Name', 'Company', 'Email', 'Phone', 'Service', 'Message']

function doPost(e) {
  try {
    const data = parsePayload_(e)
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0]
    ensureHeaders_(sheet)
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.company || '',
      data.email || '',
      data.phone || '',
      data.service || '',
      data.message || '',
    ])
    return json_({ success: true })
  } catch (err) {
    return json_({ success: false, error: String(err) })
  }
}

function doGet() {
  return json_({ ok: true, service: 'LaBrain contact form' })
}

function parsePayload_(e) {
  if (e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents)
    } catch (err) {
      // Fall through to form fields
    }
  }
  const p = (e && e.parameter) || {}
  return {
    name: p.name,
    company: p.company,
    email: p.email,
    phone: p.phone,
    service: p.service,
    message: p.message,
  }
}

function ensureHeaders_(sheet) {
  const lastRow = sheet.getLastRow()
  if (lastRow === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold')
    sheet.setFrozenRows(1)
    return
  }
  const first = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0]
  const empty = first.every(function (cell) {
    return cell === ''
  })
  if (empty) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold')
    sheet.setFrozenRows(1)
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  )
}
