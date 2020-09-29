const mongoose = require('mongoose')

const { Schema } = mongoose

schemaOptions = {
  timestamp: true
}

const schema = new Schema(
  {
    name: String,
    permalink: String,
    crunchbase_url: String,
    homepage_url: String,
    blog_url: String,
    blog_feed_url: String,
    twitter_username: String,
    category_code: String,
    number_of_employees: Number,
    founded_year: Number,
    founded_month: Number,
    founded_day: Number,
    deadpooled_year: Number,
    tag_list: String,
    alias_list: String,
    email_address: String,
    phone_number: String,
    description: String,
    overview: String,
    image: {
      available_size: Array
    },
    products: [
      {
        name: String,
        permalink: String
      }
    ],
    relationships: [
      {
        is_past: Boolean,
        title: String,
        person: {
          first_name: String,
          last_name: String,
          permalink: String
        },
        comppetitions: [
          {
            competitor: {
              name: String,
              permalink: String
            }
          }
        ]
      }
    ],
    total_money_raised: String,
    funding_rounds: [
      {
        id: Number,
        round_code: String,
        source_url: String,
        source_description: String,
        raised_amount: Number,
        raised_currency_code: String,
        founded_year: Number,
        founded_month: Number,
        founded_date: Number,
        investments: [
          {
            company: {
              type: String,
              default: null
            },
            financial_org: {
              name: String,
              permalink: String
            },
            person: {
              type: String,
              default: null
            }
          }
        ]
      }
    ],
    investments: [
      {
        funding_round: {
          round_code: String,
          source_url: String,
          source_description: String,
          raised_amount: Number,
          raised_currency_code: String,
          founded_year: Number,
          founded_month: Number,
          founded_date: Number,
          company: {
            name: String,
            permalink: String
          }
        }
      }
    ],
    acquisition: {
      price_amount: Number,
      price_currency_code: String,
      term_code: String,
      source_url: String,
      source_description: String,
      acquired_year: Number,
      acquired_month: Number,
      acquired_day: Number,
      acquiring_company: {
        name: String,
        permalink: String
      }
    },
    acquisitions: [
      {
        price_amount: Number,
        price_currency_code: String,
        term_code: String,
        source_url: String,
        source_description: String,
        acquired_year: Number,
        acquired_month: Number,
        acquired_day: Number,
        company: {
          name: String,
          permalink: String
        }
      }
    ],
    offices: [
      {
        description: String,
        address1: String,
        address2: String,
        zip_code: String,
        state_code: String,
        country_code: String,
        latitude: Number,
        longtitude: Number
      }
    ],
    milestones: [
      {
        id: Number,
        description: String,
        stoned_year: Number,
        stoned_month: Number,
        stoned_day: Number,
        source_url: String,
        source_text: {
          type: String,
          default: null
        },
        source_description: String,
        stoneable_type: String,
        stoned_value: {
          type: String,
          default: null
        },
        stoned_value_type: {
          type: String,
          default: null
        },
        stoned_acquirer: {
          type: String,
          default: null
        },
        video_embeds: [
          {
            embed_code: String,
            description: String
          }
        ],
        screenshots: [
          {
            available: Array,
            attribution: {
              type: String,
              default: null
            }
          }
        ]
      }
    ],
    external_links: [{
      external_url: String,
      title: String
    }],
    parent:[]
  },
  schemaOptions
)
// module.exports = mongoose.model('training_companies', schema)
module.exports = mongoose.model('companies', schema)
