import { StyleSheet } from 'react-native';

/**
 * Shared styles for modal components — Nouns DAO theme
 * Used to maintain consistent styling across all modals
 */
export const modalStyles = StyleSheet.create({
  cardItem: {
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333333',
  },

  cardItemLast: {
    marginBottom: 0,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
  },

  emptyText: {
    fontSize: 14,
    color: '#B0B0B0',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: 20,
  },

  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: '#FFC700',
  },

  destructiveButton: {
    backgroundColor: '#FF6B6B',
  },

  actionButtonText: {
    fontSize: 12,
    color: '#0D0D0D',
    fontWeight: '600',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#FFFFFF',
    backgroundColor: '#0D0D0D',
  },

  section: {
    marginBottom: 16,
  },

  selectedText: {
    fontSize: 14,
    color: '#B0B0B0',
    fontStyle: 'italic',
    padding: 8,
    backgroundColor: '#0D0D0D',
    borderRadius: 4,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },

  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },

  cancelButton: {
    backgroundColor: '#555555',
  },

  confirmButton: {
    backgroundColor: '#FFC700',
  },

  saveButton: {
    backgroundColor: '#FFC700',
  },

  deleteButton: {
    backgroundColor: '#FF6B6B',
  },

  buttonText: {
    color: '#0D0D0D',
    fontSize: 14,
    fontWeight: '600',
  },
});

/**
 * Color constants — Nouns DAO palette
 */
export const colors = {
  primary: '#FFC700',
  secondary: '#FF6B6B',
  accent: '#4ECDC4',
  destructive: '#FF6B6B',
  success: '#4ECDC4',
  text: {
    primary: '#FFFFFF',
    secondary: '#B0B0B0',
    tertiary: '#777777',
  },
  background: {
    card: '#1A1A1A',
    input: '#0D0D0D',
  },
  border: {
    primary: '#333333',
    secondary: '#2A2A2A',
    tertiary: '#222222',
  },
};

/**
 * Highlight color options
 */
export const HIGHLIGHT_COLORS = [
  { name: 'Gold', value: '#FFC700' },
  { name: 'Coral', value: '#FF6B6B' },
  { name: 'Teal', value: '#4ECDC4' },
  { name: 'Pink', value: '#FFB6C1' },
  { name: 'Orange', value: '#FFA500' },
  { name: 'Lavender', value: '#DDA0DD' },
];
