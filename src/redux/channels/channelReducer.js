import {
  FETCH_CHANNEL_REQUEST,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_FAILURE,
  UPDATE_CHANNEL_COUNT,
  UPDATE_CHANNEL_LIST
} from './channelTypes'

const initialState = {
  loading: false,
  channelList: [],
  error: '',
  selectedChannel:0,
  selectedChannelList:[],
  allChannelList:[
    {
    "channelName":"CH1",
    "templateId":"TemplateID001",
    "templateName":"Sample Detail Customer 1",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH2",
    "templateId":"TemplateID002",
    "templateName":"Sample Detail Customer 2",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH3",
    "templateId":"TemplateID003",
    "templateName":"Sample Detail Customer 3",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH4",
    "templateId":"TemplateID004",
    "templateName":"Sample Detail Customer 4",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH5",
    "templateId":"TemplateID005",
    "templateName":"Sample Detail Customer 5",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH6",
    "templateId":"TemplateID006",
    "templateName":"Sample Detail Customer 6",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH7",
    "templateId":"TemplateID007",
    "templateName":"Sample Detail Customer 7",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH8",
    "templateId":"TemplateID008",
    "templateName":"Sample Detail Customer 8",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH9",
    "templateId":"TemplateID009",
    "templateName":"Sample Detail Customer 9",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH10",
    "templateId":"TemplateID0010",
    "templateName":"Sample Detail Customer 10",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH11",
    "templateId":"TemplateID0011",
    "templateName":"Sample Detail Customer 11",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH12",
    "templateId":"TemplateID0012",
    "templateName":"Sample Detail Customer 12",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH13",
    "templateId":"TemplateID0013",
    "templateName":"Sample Detail Customer 13",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH14",
    "templateId":"TemplateID0014",
    "templateName":"Sample Detail Customer 14",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    {
    "channelName":"CH15",
    "templateId":"TemplateID0015",
    "templateName":"Sample Detail Customer 15",
    "targetDatebaseVersion":"1.1.1.1",
    "targetDatabaseName":"PDW",
    "fileVersion":"0.6",
    "isFieldNameInHeaderRecord":1,
    "delimitedCharacter":"||",
    "fiixedorDelimited":2,
    "isMultiRecordFile":0,
    "templateDescription":"Bacon ipsum dolor amet chuck shoulder prosciutto flank fatback pork belly sausage pork loin kevin tri-tip kielbasa strip steak ham hamburger ribeye",
    "isTemplateDeleted":0,
    "isChannelDeleted":0,
    "isSharable":1,
    "templateDateLastModified":"2021-01-06T00:00:00"
    },
    ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHANNEL_COUNT:
      return {
        ...state,
        selectedChannel: action.payload
      }
    case UPDATE_CHANNEL_LIST:
      return {
        ...state,
        selectedChannelList: action.payload
      }
    case FETCH_CHANNEL_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_CHANNEL_SUCCESS:
      return {
        loading: false,
        channelList: action.payload,
        error: ''
      }
    case FETCH_CHANNEL_FAILURE:
      return {
        loading: false,
        channelList: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer
