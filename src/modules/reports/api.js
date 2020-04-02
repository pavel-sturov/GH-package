import { callApi } from 'modules/reports/api'

/**
 * Get report info
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function view(searchQuery)
{
	return callApi('/v1/reports/list', searchQuery)
}

/**
 * Generate report
 *
 * @param {SearchQuery} searchQuery
 *
 * @return {Promise<{response: {response: Response, json: any}}|{error: (*|string)}>}
 */
function generate(searchQuery)
{
	searchQuery.addRequestOptions({
		method: 'POST',
	}, true)

	return callApi(`/v1/reports/generate`, searchQuery)
}

export const ReportsApi = {
	view,
	generate,
}
